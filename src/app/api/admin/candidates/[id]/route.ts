import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const body = await req.json();
        const { status, internalNotes } = body;
        const candidate = await prisma.candidate.update({
            where: { id: params.id },
            data: {
                adminStatus: status || undefined,
                adminNote: internalNotes !== undefined ? internalNotes : undefined,
            },
        });
        return NextResponse.json({ success: true, candidate });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const candidate = await prisma.candidate.findUnique({
            where: { id: params.id },
            include: {
                workExperience: { orderBy: { startDate: "desc" } },
                education: { orderBy: { startDate: "desc" } },
                certificates: { orderBy: { year: "desc" } },
                skills: { include: { skill: true } },
                languages: { include: { language: true } },
                attachments: {
                    select: {
                        id: true,
                        fileName: true,
                        mimeType: true,
                        filePath: true,
                        fileSize: true,
                        storageType: true,
                        createdAt: true,
                    },
                },
            },
        });
        if (!candidate) return NextResponse.json({ success: false, message: "Candidate not found" }, { status: 404 });
        return NextResponse.json({ success: true, candidate });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await prisma.candidate.delete({ where: { id: params.id } });
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

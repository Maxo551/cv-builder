import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyToken } from "@/lib/auth";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        // 1. Check Auth
        const token = req.cookies.get("admin_token")?.value;
        if (!token || !(await verifyToken(token))) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        // 2. Get Attachment info
        const attachment = await prisma.attachment.findUnique({
            where: { id: params.id },
            select: {
                fileName: true,
                mimeType: true,
                filePath: true,
                fileData: true,
            },
        });

        if (!attachment) {
            return NextResponse.json({ success: false, message: "File not found" }, { status: 404 });
        }

        // 3. Read File
        const fileBuffer = attachment.fileData
            ? Buffer.from(attachment.fileData)
            : attachment.filePath
                ? await readFile(join(process.cwd(), "uploads", attachment.filePath))
                : null;

        if (!fileBuffer) {
            return NextResponse.json({ success: false, message: "Stored file not found" }, { status: 404 });
        }

        // 4. Return as stream
        return new NextResponse(fileBuffer, {
            headers: {
                "Content-Type": attachment.mimeType,
                "Content-Disposition": `attachment; filename="${attachment.fileName}"`,
            },
        });

    } catch (error: any) {
        console.error("Download error:", error);
        return NextResponse.json({ success: false, message: "Failed to download file" }, { status: 500 });
    }
}

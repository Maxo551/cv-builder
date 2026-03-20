import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        // Identical filtering logic as the main list API
        const query = searchParams.get("query") || "";
        const status = searchParams.get("status");
        const minExp = parseInt(searchParams.get("minExp") || "0");
        const maxExp = parseInt(searchParams.get("maxExp") || "100");
        const eduLevel = searchParams.get("eduLevel");
        const skills = searchParams.get("skills")?.split(",").filter(Boolean);
        const languages = searchParams.get("languages")?.split(",").filter(Boolean);
        const license = searchParams.get("license")?.split(",").filter(Boolean);

        let where: any = {
            OR: [
                { firstName: { contains: query, mode: "insensitive" } },
                { lastName: { contains: query, mode: "insensitive" } },
                { email: { contains: query, mode: "insensitive" } },
                { desiredPosition: { contains: query, mode: "insensitive" } },
            ],
            totalExperienceYears: { gte: minExp, lte: maxExp },
        };

        if (status) where.status = status as any;
        if (eduLevel) where.highestEducationLevel = eduLevel as any;
        if (skills && skills.length > 0) {
            where.skills = { some: { skill: { name: { in: skills, mode: "insensitive" } } } };
        }
        if (languages && languages.length > 0) {
            where.languages = { some: { language: { name: { in: languages, mode: "insensitive" } } } };
        }
        if (license && license.length > 0) {
            where.driversLicenseTypes = { hasSome: license };
        }

        const candidates = await prisma.candidate.findMany({
            where,
            include: {
                skills: { include: { skill: true } },
                languages: { include: { language: true } },
                workExperience: true,
                education: true,
            },
            orderBy: { createdAt: "desc" },
        });

        // Transform for export
        const exportData = candidates.map((c: any) => ({
            ID: c.id,
            "First Name": c.firstName,
            "Last Name": c.lastName,
            Email: c.email,
            Phone: c.phone || "N/A",
            City: c.city,
            Position: c.desiredPosition,
            "Exp (Years)": c.totalExperienceYears,
            "Exp (Months)": c.totalExperienceMonths,
            Status: c.status,
            "Edu Level": c.highestEducationLevel,
            Skills: c.skills.map((s: any) => s.skill.name).join(", "),
            Languages: c.languages.map((l: any) => `${l.language.name} (${l.level})`).join(", "),
            "License Types": c.driversLicenseTypes.join(", "),
            "Applied At": c.createdAt.toISOString(),
            "Internal Notes": c.internalNotes || "",
        }));

        return NextResponse.json({ success: true, data: exportData });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Slovak keyword → filter mapping
function parseSkQuery(raw: string): { query: string; forceHasLicense?: boolean; forceIndustry?: string } {
    const q = raw.toLowerCase().trim();
    // Driver license synonyms
    const licenseTerms = ["vodicak", "vodičák", "vodičský preukaz", "vodicsky preukaz", "vodič", "vodiči", "vodičom", "vodičák b", "vodičák c", "vodičák a"];
    if (licenseTerms.some(t => q.includes(t))) return { query: "", forceHasLicense: true };
    // Industry synonyms
    const industryMap: Record<string, string> = {
        administrativa: "Administrativa",
        gastro: "Gastro",
        "drevo výroba": "Drevo výroba",
        "drevo vyroba": "Drevo výroba",
        drevo: "Drevo výroba",
        "strojárstvo": "Strojárstvo",
        strojarstvo: "Strojárstvo",
        doprava: "Doprava",
        "zdravotníctvo": "Zdravotníctvo",
        zdravotnictvo: "Zdravotníctvo",
        "služby": "Služby",
        sluzby: "Služby",
        hotelierstvo: "Hotelierstvo",
        "hotelierstve": "Hotelierstvo",
        "školstvo": "Školstvo",
        skolstvo: "Školstvo",
        "poľnohospodárstvo": "Poľnohospodárstvo",
        polnohospodarstvo: "Poľnohospodárstvo",
    };
    for (const [key, val] of Object.entries(industryMap)) {
        if (q.includes(key)) return { query: "", forceIndustry: val };
    }
    return { query: raw };
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");
        const skip = (page - 1) * limit;

        const rawQuery = searchParams.get("query") || "";
        const status = searchParams.get("status");
        const minExp = parseInt(searchParams.get("minExp") || "0");
        const eduLevel = searchParams.get("eduLevel");
        const industry = searchParams.get("industry");
        const hasLicense = searchParams.get("hasLicense");

        const { query, forceHasLicense, forceIndustry } = parseSkQuery(rawQuery);

        let where: any = {
            totalExperienceYears: { gte: minExp },
        };

        if (query) {
            where.OR = [
                { firstName: { contains: query, mode: "insensitive" } },
                { lastName: { contains: query, mode: "insensitive" } },
                { email: { contains: query, mode: "insensitive" } },
                { desiredPosition: { contains: query, mode: "insensitive" } },
                { city: { contains: query, mode: "insensitive" } },
            ];
        }

        if (status) where.adminStatus = status as any;
        if (eduLevel) where.highestEducationLevel = eduLevel as any;

        const effectiveHasLicense = forceHasLicense || hasLicense === "true";
        if (effectiveHasLicense) where.hasDriversLicense = true;

        const effectiveIndustry = forceIndustry || industry;
        if (effectiveIndustry) {
            where.workExperience = {
                some: { industry: { contains: effectiveIndustry, mode: "insensitive" } }
            };
        }

        const [candidates, total] = await Promise.all([
            prisma.candidate.findMany({
                where,
                include: { skills: { include: { skill: true } }, workExperience: true },
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
            }),
            prisma.candidate.count({ where }),
        ]);

        return NextResponse.json({ success: true, candidates, pagination: { total, pages: Math.ceil(total / limit), currentPage: page } });
    } catch (error: any) {
        console.error("Fetch candidates error:", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

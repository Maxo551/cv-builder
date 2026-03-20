import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { calculateTotalExperienceMonths } from "@/lib/experience";
import { randomBytes } from "crypto";
import { CandidateSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rate-limit";
import { saveFile } from "@/lib/storage";

export async function POST(req: NextRequest) {
    try {
        const ip = req.ip || "anonymous";
        if (!checkRateLimit(ip)) {
            return NextResponse.json({ success: false, message: "Too many requests. Please try again later." }, { status: 429 });
        }

        const formData = await req.formData();

        // Extract JSON fields
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const city = formData.get("city") as string;
        const desiredPosition = formData.get("desiredPosition") as string;
        const gdprConsent = formData.get("gdprConsent") === "true";
        const hasDriversLicense = formData.get("hasDriversLicense") === "true";
        const driversLicenseTypes = JSON.parse(formData.get("driversLicenseTypes") as string || "[]");

        const education = JSON.parse(formData.get("education") as string || "[]");
        const workExperience = JSON.parse(formData.get("workExperience") as string || "[]");
        const skills = JSON.parse(formData.get("skills") as string || "[]");
        const languages = JSON.parse(formData.get("languages") as string || "[]");
        const certificates = JSON.parse(formData.get("certificates") as string || "[]");

        const cvFile = formData.get("cvFile") as File | null;

        // 1. Validate basic data (Partial validation since we manually parsed)
        // In a full app, we'd use a more robust FormData validation library
        if (!firstName || !lastName || !email || !city || !desiredPosition) {
            return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
        }

        // 2. Generate Share Token
        const shareToken = randomBytes(32).toString("hex");

        // 3. Calculate Experience
        const experienceIntervals = workExperience.map((exp: any) => ({
            startDate: new Date(exp.startDate),
            endDate: exp.isCurrent ? new Date() : new Date(exp.endDate),
        }));

        const totalMonths = calculateTotalExperienceMonths(experienceIntervals);
        const totalYears = Math.floor(totalMonths / 12);

        // 4. Save to Database (Transaction)
        const result = await prisma.$transaction(async (tx: any) => {
            const candidate = await tx.candidate.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    phone,
                    city,
                    desiredPosition,
                    totalExperienceMonths: totalMonths,
                    totalExperienceYears: totalYears,
                    hasDriversLicense,
                    driversLicenseTypes,
                    highestEducationLevel: education.length > 0 ? education[0].level : "PRIMARY", // Simplified
                    gdprConsent,
                    shareToken,

                    workExperience: {
                        create: workExperience.map((exp: any) => ({
                            position: exp.position,
                            company: exp.company,
                            industry: exp.industry === "Iné" ? (exp.industryCustom || "Iné") : (exp.industry || null),
                            startDate: new Date(exp.startDate),
                            endDate: exp.endDate ? new Date(exp.endDate) : null,
                            isCurrent: exp.isCurrent,
                            description: exp.description,
                        })),
                    },

                    education: {
                        create: education.map((edu: any) => ({
                            school: edu.school,
                            field: edu.field,
                            level: edu.level,
                            startDate: new Date(edu.startDate),
                            endDate: edu.endDate ? new Date(edu.endDate) : null,
                            isCurrent: edu.isCurrent,
                        })),
                    },

                    certificates: {
                        create: certificates.map((cert: any) => ({
                            name: cert.name,
                            organization: cert.organization,
                            year: cert.year,
                        })),
                    },
                },
            });

            // Handle File Upload if exists
            if (cvFile) {
                const fileInfo = await saveFile(cvFile);
                await tx.attachment.create({
                    data: {
                        candidateId: candidate.id,
                        fileName: fileInfo.fileName,
                        filePath: fileInfo.storedName, // Store UUID name in DB relative to /uploads
                        fileSize: fileInfo.fileSize,
                        mimeType: fileInfo.mimeType,
                    }
                });
            }

            // Handle Skills
            for (const skillName of skills) {
                const skill = await tx.skill.upsert({
                    where: { name: skillName },
                    update: {},
                    create: { name: skillName },
                });

                await tx.candidateSkill.create({
                    data: {
                        candidateId: candidate.id,
                        skillId: skill.id,
                    },
                });
            }

            // Handle Languages
            for (const lang of languages) {
                const language = await tx.language.upsert({
                    where: { name: lang.name },
                    update: {},
                    create: { name: lang.name },
                });

                await tx.candidateLanguage.create({
                    data: {
                        candidateId: candidate.id,
                        languageId: language.id,
                        level: lang.level,
                    },
                });
            }

            return candidate;
        });

        return NextResponse.json({
            success: true,
            id: result.id,
            shareToken: result.shareToken
        });

    } catch (error: any) {
        // Full error log on the server
        console.error("=== Candidate creation error ===");
        console.error("Message:", error?.message);
        console.error("Code:", error?.code);
        console.error("Meta:", JSON.stringify(error?.meta));
        console.error("Stack:", error?.stack);

        // User-friendly message
        const isDbError =
            error?.message?.includes("database") ||
            error?.message?.includes("prisma") ||
            error?.message?.includes("tenant") ||
            error?.code?.startsWith("P");

        const userMessage = isDbError
            ? "Database connection error. Please try again later."
            : error.message || "Internal server error";

        return NextResponse.json({ success: false, message: userMessage }, { status: 500 });
    }
}

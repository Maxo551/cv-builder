import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { calculateTotalExperienceMonths } from "@/lib/experience";
import { randomBytes } from "crypto";
import { CandidateSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rate-limit";
import { saveFile } from "@/lib/storage";

function getStringField(formData: FormData, fieldName: string) {
    const value = formData.get(fieldName);
    return typeof value === "string" ? value.trim() : "";
}

function parseJsonField<T>(formData: FormData, fieldName: string, fallback: T): T {
    const value = formData.get(fieldName);

    if (typeof value !== "string" || value.trim() === "") {
        return fallback;
    }

    try {
        return JSON.parse(value) as T;
    } catch {
        return fallback;
    }
}

function hasText(value: unknown) {
    return typeof value === "string" && value.trim().length > 0;
}

function toValidDate(value: unknown): Date | null {
    if (!hasText(value)) return null;
    const d = new Date(value as string);
    return isNaN(d.getTime()) ? null : d;
}

const VALID_EDUCATION_LEVELS = new Set([
    "PRIMARY",
    "HIGH_SCHOOL",
    "HIGH_SCHOOL_GRADUATION",
    "BACHELOR",
    "MASTER",
    "PHD",
]);

const VALID_LANGUAGE_LEVELS = new Set(["A1", "A2", "B1", "B2", "C1", "C2"]);

function toSafeYear(value: unknown): number | null {
    const n = typeof value === "number" ? value : parseInt(String(value ?? ""), 10);
    if (!Number.isFinite(n)) return null;
    const year = Math.trunc(n);
    if (year < 1900 || year > 2100) return null;
    return year;
}

export async function POST(req: NextRequest) {
    try {
        const ip = req.ip || "anonymous";
        if (!checkRateLimit(ip)) {
            return NextResponse.json({ success: false, message: "Too many requests. Please try again later." }, { status: 429 });
        }

        const formData = await req.formData();

        // Extract JSON fields
        const firstName = getStringField(formData, "firstName");
        const lastName = getStringField(formData, "lastName");
        const email = getStringField(formData, "email");
        const phone = getStringField(formData, "phone");
        const city = getStringField(formData, "city");
        const desiredPosition = getStringField(formData, "desiredPosition");
        const gdprConsent = formData.get("gdprConsent") === "true";
        const hasDriversLicense = formData.get("hasDriversLicense") === "true";
        const driversLicenseTypes = Array.from(
            new Set(
                parseJsonField<string[]>(formData, "driversLicenseTypes", [])
                    .map((type) => (typeof type === "string" ? type.trim().toUpperCase() : ""))
                    .filter(Boolean)
            )
        );

        const education = parseJsonField<any[]>(formData, "education", [])
            .map((edu) => {
                const level = typeof edu?.level === "string" ? edu.level.trim() : "";
                return {
                    ...edu,
                    level: VALID_EDUCATION_LEVELS.has(level) ? level : "",
                    school: typeof edu?.school === "string" ? edu.school.trim() : "",
                    field: typeof edu?.field === "string" ? edu.field.trim() : "",
                    startDate: typeof edu?.startDate === "string" ? edu.startDate.trim() : "",
                    endDate: typeof edu?.endDate === "string" ? edu.endDate.trim() : "",
                    isCurrent: edu?.isCurrent === true,
                };
            })
            .filter((edu) =>
                hasText(edu.level) &&
                hasText(edu.school) &&
                hasText(edu.field) &&
                toValidDate(edu.startDate) !== null
            );

        const workExperience = parseJsonField<any[]>(formData, "workExperience", [])
            .map((exp) => ({
                ...exp,
                position: typeof exp?.position === "string" ? exp.position.trim() : "",
                company: typeof exp?.company === "string" ? exp.company.trim() : "",
                industry: typeof exp?.industry === "string" ? exp.industry.trim() : "",
                industryCustom: typeof exp?.industryCustom === "string" ? exp.industryCustom.trim() : "",
                startDate: typeof exp?.startDate === "string" ? exp.startDate.trim() : "",
                endDate: typeof exp?.endDate === "string" ? exp.endDate.trim() : "",
                description: typeof exp?.description === "string" ? exp.description.trim() : "",
                isCurrent: exp?.isCurrent === true,
            }))
            .filter((exp) =>
                hasText(exp.position) &&
                hasText(exp.company) &&
                toValidDate(exp.startDate) !== null &&
                (exp.isCurrent || toValidDate(exp.endDate) !== null)
            );

        const skills = Array.from(
            new Set(
                parseJsonField<string[]>(formData, "skills", [])
                    .map((skill) => (typeof skill === "string" ? skill.trim() : ""))
                    .filter(Boolean)
            )
        );

        const languages = parseJsonField<any[]>(formData, "languages", [])
            .map((lang) => {
                const level = typeof lang?.level === "string" ? lang.level.trim().toUpperCase() : "";
                return {
                    ...lang,
                    name: typeof lang?.name === "string" ? lang.name.trim() : "",
                    level: VALID_LANGUAGE_LEVELS.has(level) ? level : "B1",
                };
            })
            .filter((lang) => hasText(lang.name));

        const certificates = parseJsonField<any[]>(formData, "certificates", [])
            .map((cert) => ({
                ...cert,
                name: typeof cert?.name === "string" ? cert.name.trim() : "",
                organization: typeof cert?.organization === "string" ? cert.organization.trim() : "",
                year: toSafeYear(cert?.year),
            }))
            .filter((cert) => hasText(cert.name) && hasText(cert.organization) && cert.year !== null);

        const cvFile = formData.get("cvFile") as File | null;

        const payload = {
            firstName,
            lastName,
            email,
            phone,
            city,
            desiredPosition,
            hasDriversLicense,
            driversLicenseTypes,
            highestEducationLevel: education.length > 0 ? education[0].level : "PRIMARY",
            gdprConsent,
            education,
            workExperience,
            skills,
            languages,
            certificates,
        };

        const validation = CandidateSchema.safeParse(payload);
        if (!validation.success) {
            const requiredFieldLabels: Record<string, string> = {
                firstName: "first name",
                lastName: "last name",
                email: "email",
                city: "city",
                desiredPosition: "desired position",
                gdprConsent: "GDPR consent",
            };
            const missingFields = Array.from(
                new Set(
                    validation.error.issues
                        .map((issue) => issue.path[0])
                        .filter((field): field is string => typeof field === "string")
                        .map((field) => requiredFieldLabels[field] || field)
                )
            );

            return NextResponse.json({
                success: false,
                message: missingFields.length > 0
                    ? `Please complete: ${missingFields.join(", ")}`
                    : "Invalid form data",
            }, { status: 400 });
        }

        // 2. Generate Share Token
        const shareToken = randomBytes(32).toString("hex");

        // 3. Calculate Experience (workExperience is already sanitized above)
        const experienceIntervals = workExperience.map((exp: any) => ({
            startDate: toValidDate(exp.startDate) as Date,
            endDate: exp.isCurrent ? new Date() : (toValidDate(exp.endDate) as Date),
        }));

        const rawMonths = calculateTotalExperienceMonths(experienceIntervals);
        const totalMonths = Number.isFinite(rawMonths) ? Math.max(0, Math.trunc(rawMonths)) : 0;
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
                            startDate: toValidDate(exp.startDate) as Date,
                            endDate: exp.isCurrent ? null : toValidDate(exp.endDate),
                            isCurrent: exp.isCurrent === true,
                            description: hasText(exp.description) ? exp.description : null,
                        })),
                    },

                    education: {
                        create: education.map((edu: any) => ({
                            school: edu.school,
                            field: edu.field,
                            level: edu.level,
                            startDate: toValidDate(edu.startDate) as Date,
                            endDate: edu.isCurrent ? null : toValidDate(edu.endDate),
                            isCurrent: edu.isCurrent === true,
                        })),
                    },

                    certificates: {
                        create: certificates.map((cert: any) => ({
                            name: cert.name,
                            organization: cert.organization,
                            year: cert.year as number,
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
                        filePath: fileInfo.filePath,
                        fileData: fileInfo.fileData,
                        storageType: fileInfo.storageType,
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
        const prismaCode = typeof error?.code === "string" ? error.code : "";
        const duplicateTarget = Array.isArray(error?.meta?.target) ? error.meta.target.join(", ") : "";
        const errorMessage = typeof error?.message === "string" ? error.message : "";
        const isConnectionError =
            prismaCode === "P1001" ||
            prismaCode === "P1002" ||
            prismaCode === "P2024" ||
            errorMessage.includes("Can't reach database server") ||
            errorMessage.includes("Timed out fetching a new connection");

        let userMessage = errorMessage || "Internal server error";

        if (prismaCode === "P2002") {
            userMessage = duplicateTarget.includes("email")
                ? "A CV with this email already exists. The candidate is already in the admin dashboard."
                : "This candidate already exists.";
        } else if (isConnectionError) {
            userMessage = "Database connection error. Please try again later.";
        }

        return NextResponse.json({ success: false, message: userMessage }, { status: 500 });
    }
}

import { z } from "zod";

export const EducationLevelSchema = z.enum([
    "PRIMARY",
    "HIGH_SCHOOL",
    "HIGH_SCHOOL_GRADUATION",
    "BACHELOR",
    "MASTER",
    "PHD",
]);

export const EducationSchema = z.object({
    level: EducationLevelSchema,
    school: z.string().min(1, "School name is required"),
    field: z.string().min(1, "Field of study is required"),
    startDate: z.string(),
    endDate: z.string().optional().nullable(),
    isCurrent: z.boolean().default(false),
});

export const WorkExperienceSchema = z.object({
    position: z.string().min(1, "Position is required"),
    company: z.string().min(1, "Company name is required"),
    startDate: z.string(),
    endDate: z.string().optional().nullable(),
    isCurrent: z.boolean().default(false),
    description: z.string().optional(),
});

export const CandidateSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    city: z.string().min(1, "City is required"),
    desiredPosition: z.string().min(1, "Position is required"),
    hasDriversLicense: z.boolean().default(false),
    driversLicenseTypes: z.array(z.string()).optional(),
    highestEducationLevel: EducationLevelSchema,
    gdprConsent: z.boolean().refine((val) => val === true, {
        message: "GDPR consent is required",
    }),
    education: z.array(EducationSchema),
    workExperience: z.array(WorkExperienceSchema),
    skills: z.array(z.string()),
    languages: z.array(z.object({
        name: z.string(),
        level: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]),
    })),
    certificates: z.array(z.object({
        name: z.string(),
        organization: z.string(),
        year: z.number(),
    })),
});

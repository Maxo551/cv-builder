import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

function getDatabaseUrl() {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
        return undefined;
    }

    try {
        const parsedUrl = new URL(databaseUrl);

        if (parsedUrl.hostname.includes("pooler.supabase.com")) {
            if (!parsedUrl.searchParams.has("connection_limit")) {
                parsedUrl.searchParams.set("connection_limit", "1");
            }

            if (!parsedUrl.searchParams.has("sslmode")) {
                parsedUrl.searchParams.set("sslmode", "require");
            }
        }

        return parsedUrl.toString();
    } catch {
        return databaseUrl;
    }
}

const databaseUrl = getDatabaseUrl();

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        ...(databaseUrl ? { datasources: { db: { url: databaseUrl } } } : {}),
        log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

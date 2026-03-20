const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "securepassword123";

    console.log("Seeding database...");

    // Check if admin already exists
    const existingAdmin = await prisma.adminUser.findUnique({
        where: { email: adminEmail },
    });

    if (existingAdmin) {
        console.log(`Admin user with email ${adminEmail} already exists.`);
    } else {
        const hashedPassword = await bcrypt.hash(adminPassword, 10);
        await prisma.adminUser.create({
            data: {
                email: adminEmail,
                password: hashedPassword,
            },
        });
        console.log(`Admin user ${adminEmail} created successfully.`);
    }

    // Pre-seed some basic skills and languages
    const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "SQL", "Tailwind CSS", "Communication", "Teamwork", "Problem Solving"];
    for (const skillName of skills) {
        await prisma.skill.upsert({
            where: { name: skillName },
            update: {},
            create: { name: skillName, category: "IT" },
        });
    }

    const languages = ["English", "Spanish", "German", "French", "Polish"];
    for (const langName of languages) {
        await prisma.language.upsert({
            where: { name: langName },
            update: {},
            create: { name: langName },
        });
    }

    console.log("Seeding completed.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

const UPLOAD_DIR = join(process.cwd(), "uploads");

export async function saveFile(file: File) {
    try {
        // Ensure directory exists
        await mkdir(UPLOAD_DIR, { recursive: true });

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const fileExtension = file.name.split(".").pop();
        const fileName = `${uuidv4()}.${fileExtension}`;
        const filePath = join(UPLOAD_DIR, fileName);

        await writeFile(filePath, buffer);

        return {
            fileName: file.name,
            storedName: fileName,
            filePath,
            fileSize: file.size,
            mimeType: file.type,
        };
    } catch (error) {
        console.error("Error saving file:", error);
        throw new Error("Failed to save file.");
    }
}

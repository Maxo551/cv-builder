const MAX_UPLOAD_SIZE_BYTES = 10 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set(["pdf", "docx"]);
const MIME_TYPES_BY_EXTENSION: Record<string, string> = {
    pdf: "application/pdf",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

function getFileExtension(fileName: string) {
    return fileName.split(".").pop()?.toLowerCase() ?? "";
}

export async function saveFile(file: File) {
    const fileExtension = getFileExtension(file.name);

    if (!ALLOWED_EXTENSIONS.has(fileExtension)) {
        throw new Error("Only PDF and DOCX files are supported.");
    }

    if (file.size > MAX_UPLOAD_SIZE_BYTES) {
        throw new Error("File is too large. Max 10MB allowed.");
    }

    try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        return {
            fileName: file.name,
            filePath: null,
            fileData: buffer,
            fileSize: file.size,
            mimeType: file.type || MIME_TYPES_BY_EXTENSION[fileExtension] || "application/octet-stream",
            storageType: "DATABASE",
        };
    } catch (error) {
        console.error("Error preparing file:", error);
        throw new Error("Failed to save file.");
    }
}

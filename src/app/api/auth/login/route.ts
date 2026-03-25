import { NextRequest, NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try {
        const { password } = await req.json();
        const adminPassword = process.env.ADMIN_PASSWORD || "securepassword123";

        if (!password || password !== adminPassword) {
            return NextResponse.json({ success: false, message: "Nesprávne heslo" }, { status: 401 });
        }

        const token = await signToken({ role: "admin" });
        const response = NextResponse.json({ success: true, message: "Prihlásenie úspešné" });
        response.cookies.set("admin_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24,
        });
        return response;
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message || "Chyba servera" }, { status: 500 });
    }
}

import { NextRequest, NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try {
        const { password } = await req.json();

        const adminPassword = process.env.ADMIN_PASSWORD;
        if (!adminPassword || password !== adminPassword) {
            return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
        }

        const token = await signToken({ role: "admin" });

        const response = NextResponse.json({ success: true, message: "Logged in successfully" });
        response.cookies.set("admin_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24, // 1 day
        });

        return response;
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message || "Internal server error" }, { status: 500 });
    }
}

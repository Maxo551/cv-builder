import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-for-dev-only";

function getSecret() {
    return new TextEncoder().encode(JWT_SECRET);
}

export async function hashPassword(password: string) {
    return bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
}

export async function signToken(payload: Record<string, any>): Promise<string> {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1d")
        .sign(getSecret());
}

export async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, getSecret());
        return payload;
    } catch {
        return null;
    }
}

export function getAuthToken() {
    return cookies().get("admin_token")?.value;
}

export function setAuthCookie(token: string) {
    cookies().set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
    });
}

export function clearAuthCookie() {
    cookies().set("admin_token", "", { maxAge: 0 });
}

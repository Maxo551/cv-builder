// Simple in-memory rate limiter
const rateLimitMap = new Map();

export function checkRateLimit(ip: string, limit: number = 5, windowMsSize: number = 60000) {
    const now = Date.now();
    const userData = rateLimitMap.get(ip) || { count: 0, startTime: now };

    if (now - userData.startTime > windowMsSize) {
        userData.count = 1;
        userData.startTime = now;
    } else {
        userData.count++;
    }

    rateLimitMap.set(ip, userData);

    return userData.count <= limit;
}

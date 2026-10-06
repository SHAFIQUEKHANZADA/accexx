/**
 * In-memory sliding-window rate limiter for serverless Next.js API routes.
 */

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const ipMap = new Map<string, RateLimitRecord>();

// Clean up old entries every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of ipMap.entries()) {
      if (record.resetAt <= now) {
        ipMap.delete(key);
      }
    }
  }, 5 * 60 * 1000);
}

/**
 * Checks if a client IP has exceeded the allowed rate limit.
 * @param ip Client IP address
 * @param maxRequests Maximum requests allowed in window (default: 15)
 * @param windowMs Window duration in milliseconds (default: 60,000ms / 1 min)
 */
export function checkRateLimit(
  ip: string,
  maxRequests = 15,
  windowMs = 60 * 1000
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const current = ipMap.get(ip);

  if (!current || current.resetAt <= now) {
    ipMap.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (current.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  current.count += 1;
  return { allowed: true, remaining: maxRequests - current.count };
}

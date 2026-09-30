import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Optional: limit build workers on low-memory machines, e.g. NEXT_BUILD_CPUS=2 npm run build
    ...(process.env.NEXT_BUILD_CPUS ? { cpus: Number(process.env.NEXT_BUILD_CPUS) } : {}),
  },
};

export default nextConfig;

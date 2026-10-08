import type { NextConfig } from "next";

const shopUrl = process.env.NEXT_PUBLIC_SHOP_URL || "https://shop.accexxinsight.com";

const nextConfig: NextConfig = {
  // The store is a separate site now (2026-10-09): old /shop links go there.
  async redirects() {
    return [
      { source: "/shop", destination: shopUrl, permanent: false },
      { source: "/shop/:path*", destination: shopUrl, permanent: false },
    ];
  },
  experimental: {
    // Optional: limit build workers on low-memory machines, e.g. NEXT_BUILD_CPUS=2 npm run build
    ...(process.env.NEXT_BUILD_CPUS ? { cpus: Number(process.env.NEXT_BUILD_CPUS) } : {}),
  },
};

export default nextConfig;

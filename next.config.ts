import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.coverr.co" }
    ]
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  }
};

export default nextConfig;

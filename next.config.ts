import type { NextConfig } from "next";

// Allow self-signed / unverifiable certs in local dev only.
// In production (Vercel) this block is never reached.
if (process.env.NODE_ENV === "development") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.st-note.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com", "egsihama.com"], // Add allowed domains here
  },
};

export default nextConfig;
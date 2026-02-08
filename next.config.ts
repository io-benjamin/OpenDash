import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/OpenDash',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

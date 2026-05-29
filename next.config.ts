import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/The-FMAC-Trader-s-Log',   // ← Make sure this matches your repo name exactly
  trailingSlash: true,
};

export default nextConfig;

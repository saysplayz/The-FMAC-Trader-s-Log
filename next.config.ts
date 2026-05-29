import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // Important for GitHub Pages
  images: {
    unoptimized: true,        // Required for static export
  },
  basePath: '/The-FMAC-Trader-s-Log',  // ← Your repository name
  trailingSlash: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/macs-hit.github.io",
  assetPrefix: "/macs-hit.github.io/",
};

export default nextConfig;

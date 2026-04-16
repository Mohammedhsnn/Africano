import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // Avoid incorrect workspace root inference when other lockfiles exist.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;

import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be served from GitHub Pages.
  output: "export",
  // Pin the workspace root (a stray lockfile in the home dir confuses Next).
  outputFileTracingRoot: __dirname,
  // This is a user/organization page (angelsanddevslol.github.io),
  // so it is served from the domain root, with no basePath needed.
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

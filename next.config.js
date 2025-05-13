/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // ✅ Required for static export
  },
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  output: "export", // ✅ Enables static export
};

module.exports = withPWA(nextConfig);

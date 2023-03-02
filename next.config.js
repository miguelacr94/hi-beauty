/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    isDebug: process.env.NODE_ENV === "development",
  },
};

module.exports = nextConfig;

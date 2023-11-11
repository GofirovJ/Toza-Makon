/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_BASE_URL: process.env.NEXT_BASE_URL,
    NEXT_BASE: process.env.NEXT_BASE,
  },
};

module.exports = nextConfig;

const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_BASE_URL: process.env.NEXT_BASE_URL,
    NEXT_BASE: process.env.NEXT_BASE,
  },
  i18n,
};

module.exports = nextConfig;

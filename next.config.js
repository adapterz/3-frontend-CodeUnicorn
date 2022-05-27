/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    NAVER_CLIENT_ID: process.env.NAVER_CLIENT_ID,
    NAVER_SECRET: process.env.NAVER_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    BASE_URL: process.env.BASE_URL,
    LOGIN_API_URL: process.env.LOGIN_API_URL,
  },
};

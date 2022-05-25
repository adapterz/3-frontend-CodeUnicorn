/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    NAVER_CLIENT_ID: process.env.NAVER_CLIENT_ID,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    BASE_URL: process.env.BASE_URL,
    LOGIN_API_URL: process.env.LOGIN_API_URL,
  },
};

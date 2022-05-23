/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    NAVER_CLIENT_ID: process.env.NAVER_CLIENT_ID,
    LOCAL_URL: process.env.LOCAL_URL,
  },
};

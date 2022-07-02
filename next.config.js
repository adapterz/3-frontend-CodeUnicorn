/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  baseUrl: ".",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
  paths: {
    "@/components/*": ["components/*"],
    "@/core/*": ["core/*"],
    "@/pages/*": ["pages/*"],
    "@/util/*": ["util/*"],
    "@/interface/*": ["interface/*"],
  },
};

module.exports = {
  images: {
    domains: ["code-unicorn-service.s3.ap-northeast-2.amazonaws.com"],
  },
  nextConfig,
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_USER_API_URL: process.env.NEXT_PUBLIC_USER_API_URL,
    NEXT_PUBLIC_COURSE_API_URL: process.env.NEXT_PUBLIC_COURSE_API_URL,
    NEXT_PUBLIC_NAVER_CLIENT_ID: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    NEXT_PUBLIC_NAVER_SECRET: process.env.NEXT_PUBLIC_NAVER_SECRET,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_SECRET: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

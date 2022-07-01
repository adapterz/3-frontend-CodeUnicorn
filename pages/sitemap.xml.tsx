// import fs from "fs";
// import { categories } from "@/components/Catagories";
// import axios from "axios";
import { GetServerSideProps } from "next";

const DOMAIN = "codeunicorn.kr";

const SiteMap = () => {};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const fs = require("fs");
  const axios = require("axios");

  const categories = [
    { key: "all", name: "전체" },
    { key: "frontend", name: "프론트엔드" },
    { key: "backend", name: "백엔드" },
    { key: "mobile", name: "모바일" },
    { key: "language", name: "프로그래밍 언어" },
    { key: "algorithm", name: "알고리즘" },
    { key: "database", name: "데이터베이스" },
  ];

  const {
    data: { courseCount },
  } = await axios.get("https://api.codeunicorn.kr/courses/all");

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.tsx",
        "_document.js",
        "sitemap.xml.tsx",
        "404.tsx",
        "privacy.tsx",
        "terms-of-service.tsx",
        "courses.tsx",
        "api",
        "users",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${DOMAIN}/${staticPagePath}`;
    });

  categories.map((category) =>
    staticPages.push(
      `${DOMAIN}/courses?category=${category.key}&amp;sortby=popular&amp;page=1`,
    ),
  );

  for (let i = 1; i < courseCount; i++) {
    staticPages.push(`${DOMAIN}/courses/${i}`);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map((url) => {
        return `
          <url>
            <loc>${url.replace(".tsx", "")}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>
  `;

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;

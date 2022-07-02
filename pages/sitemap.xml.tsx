import { categories } from "@/components/Catagories";
import axios from "axios";
import { GetServerSideProps } from "next";

const DOMAIN = "codeunicorn.kr";

const SiteMap = () => {};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const fs = require("fs");

  // const {
  //   data: { courseCount },
  // } = await axios.get("https://api.codeunicorn.kr/courses/all");

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

  // for (let i = 1; i < courseCount; i++) {
  //   staticPages.push(`${DOMAIN}/courses/${i}`);
  // }

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

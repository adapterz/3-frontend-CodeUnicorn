import { categories } from "@/components/Catagories";
import axios from "axios";
import { GetServerSideProps } from "next";
import { getServerSideSitemap } from "next-sitemap";

const DOMAIN = "codeunicorn.kr";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    data: { courseCount },
  } = await axios.get("https://api.codeunicorn.kr/courses/all");

  const defaultSitemap = [
    "codeunicorn.kr",
    "codeunicorn.kr/courses",
    "codeunicorn.kr/join",
    "codeunicorn.kr/login",
  ];

  const staticPages = [];

  defaultSitemap.map((sitemap) => {
    staticPages.push(sitemap);
  });

  categories.map((category) =>
    staticPages.push(
      `${DOMAIN}/courses?category=${category.key}&amp;sortby=popular&amp;page=1`,
    ),
  );

  for (let i = 1; i < courseCount; i++) {
    staticPages.push(`${DOMAIN}/courses/${i}`);
  }

  const fields = staticPages.map((page) => ({
    loc: `${page.replace(".tsx", "")}`,
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: "1.0",
  }));

  return getServerSideSitemap(ctx, fields as any);
};

export default () => {};

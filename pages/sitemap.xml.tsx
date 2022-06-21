import { GetServerSidePropsContext } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const lastmod = new Date().toISOString();

  const defaultFields: ISitemapField[] = [
    {
      loc: process.env.NEXT_PUBLIC_BASE_URL,
      changefreq: "daily",
      priority: 0.8,
      lastmod,
    },
  ];

  const fields = [...defaultFields];

  return getServerSideSitemap(ctx, fields);
};

export default () => {
  return;
};

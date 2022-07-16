import Login from "@/components/Login";
import { NextSeo } from "next-seo";

export default function login() {
  return (
    <>
      <NextSeo
        title="코드유니콘 | 로그인"
        description="코드유니콘 로그인 후 프론트엔드, 백엔드, 게임 개발 등 다양한 강의를 무료로 수강하세요."
        openGraph={{
          type: "website",
          locale: "ko_KR",
          url: "https://codeunicorn.kr/login",
          title: "코드유니콘 | 로그인",
          description:
            "코드유니콘 로그인 후 프론트엔드, 백엔드, 게임 개발 등 다양한 강의를 무료로 수강하세요.",
          site_name: "코드유니콘",
          images: [
            {
              url: "/images/logo.svg",
              width: 285,
              height: 160,
              alt: "로고 이미지",
            },
          ],
        }}
      ></NextSeo>
      <Login />;
    </>
  );
}

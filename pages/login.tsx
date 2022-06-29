import Login from "@/components/Login";
import { NextSeo } from "next-seo";

export default function login() {
  return (
    <>
      <NextSeo
        title="코드유니콘 | 로그인"
        description="코드유니콘 로그인 후 프론트엔드, 백엔드, 게임 개발 등 다양한 강의를 무료로 수강하세요."
      ></NextSeo>
      <Login />;
    </>
  );
}

import Login from "@/components/login/Login";
import { NextSeo } from "next-seo";

export default function login() {
  return (
    <>
      <NextSeo
        title="로그인"
        description="프론트엔드, 백엔드, 게임 개발 등 다양한 강의를 무료료 수강할 수 있는 무료 온라인 강의 사이트"
      ></NextSeo>
      <Login />;
    </>
  );
}

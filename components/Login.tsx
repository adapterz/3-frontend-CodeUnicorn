import loginApi from "@/core/api/loginApi";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { IAuth, loginUser } from "slices/auth";
import { setMessage, ToastType } from "slices/toast";
import { Cookies } from "react-cookie";
import Link from "next/link";
import { NextSeo } from "next-seo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 72vh;
`;

const LoginLayout = styled.div`
  width: 260px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 320px;
  height: 280px;
`;

const Title = styled.span`
  color: ${(props) => props.color};
  padding-top: 4px;
  font-size: 20px;
  font-weight: 600;
`;

const NaverBtn = styled(LoginLayout)`
  background-color: rgb(3, 199, 90);
  margin-bottom: 10px;
`;

const NaverLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const GoogleBtn = styled(LoginLayout)`
  background-color: #d1cece;
`;

const GoogleLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const JoinInfo = styled.span`
  margin-top: 20px;
  text-align: center;

  a {
    padding-left: 2px;
    font-weight: bold;
    text-decoration: underline;
  }
`;

export default function Login() {
  const { data, status } = useSession();
  const router = useRouter();
  const cookie = new Cookies();
  const dispatch = useDispatch();

  if (cookie.get("SESSION") === undefined && status === "authenticated") {
    (async () => {
      const response = await loginApi(data.user);

      if (response.status === 200) {
        dispatch(
          loginUser({
            isLogined: true,
            userId: response.data.data.id,
            userName: response.data.data.nickname,
            image: response.data.data.profilePath,
          } as IAuth),
        );

        localStorage.setItem("user", JSON.stringify(response.data.data));

        const cookies = new Cookies();

        cookies.set("SESSION", response.data.data.loginSessionId, {
          domain: "codeunicorn.kr",
          path: "/",
          secure: true,
        });

        dispatch(
          setMessage({ message: "로그인에 성공했습니다." } as ToastType),
        );
        router.push("/");
      } else {
        dispatch(setMessage({ message: response.statusText } as ToastType));
      }
    })();
  }

  return (
    <Container>
      <NextSeo
        title="코드유니콘 | 로그인"
        description="코드유니콘 로그인 후 프론트엔드, 백엔드, 게임 개발 등 다양한 강의를 무료로 수강하세요."
      ></NextSeo>
      <Logo title="코드유니콘" alt="코드유니콘" src="/images/logo.svg"></Logo>
      <NaverBtn onClick={() => signIn("naver")}>
        <NaverLogo src="/images/naver.png" />
        <Title color={"white"}>네이버 로그인</Title>
      </NaverBtn>
      <GoogleBtn onClick={() => signIn("google")}>
        <GoogleLogo src="/images/google.png" />
        <Title color={"#4d4949"}>Google 로그인</Title>
      </GoogleBtn>
      <JoinInfo>
        아직 회원이 아니신가요?
        <Link href={"/join"}>
          <a>회원가입하기</a>
        </Link>
      </JoinInfo>
    </Container>
  );
}

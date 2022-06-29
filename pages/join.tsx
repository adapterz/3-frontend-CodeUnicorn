import styled from "styled-components";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { setMessage, ToastType } from "slices/toast";
import { useDispatch } from "react-redux";
import joinApi from "@/core/api/joinApi";
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
  width: 280px;
  height: 240px;
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
  line-height: 1.4;

  a {
    padding-left: 2px;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const Join = () => {
  const router = useRouter();
  const { data, status } = useSession();
  const dispatch = useDispatch();

  if (status === "authenticated") {
    (async () => {
      const response = await joinApi(data.user);
      if (response.status === 201) {
        dispatch(
          setMessage({ message: "회원가입에 성공했습니다." } as ToastType),
        );
        router.push("/login");
      } else {
        dispatch(setMessage({ message: response.statusText } as ToastType));
      }
    })();
  }

  return (
    <Container>
      <NextSeo
        title="코드유니콘 | 회원가입"
        description="코드유니콘 회원가입 후 프론트엔드, 백엔드, 게임 개발 등 다양한 강의를 무료로 수강하세요."
      ></NextSeo>
      <Logo src="/images/logo.svg"></Logo>
      <NaverBtn onClick={() => signIn("naver")}>
        <NaverLogo src="/images/naver.png" />
        <Title color={"white"}>네이버 회원가입</Title>
      </NaverBtn>
      <GoogleBtn onClick={() => signIn("google")}>
        <GoogleLogo src="/images/google.png" />
        <Title color={"#4d4949"}>Google 회원가입</Title>
      </GoogleBtn>
      <JoinInfo>
        위의 버튼을 클릭함으로써 코드유니콘의
        <br />
        <Link href="/terms-of-service">
          <a>이용약관, </a>
        </Link>
        <Link href="/privacy">
          <a>개인정보 취급방침</a>
        </Link>
        에 동의합니다.
      </JoinInfo>
    </Container>
  );
};

export default Join;

import loginApi from "@/core/api/login/loginApi";
import { signIn, useSession } from "next-auth/react";
import { Cookies } from "react-cookie";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
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
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Title = styled.span`
  color: white;
  padding-top: 4px;
  font-size: 20px;
  font-weight: 600;
`;

const NaverBtn = styled(LoginLayout)`
  background-color: rgb(3, 199, 90);
  margin-bottom: 10px;
`;

const GoogleBtn = styled(LoginLayout)`
  background-color: #d1cece;
`;

const GoogleLogo = styled(Logo)`
  width: 40px;
  height: 40px;
`;

export default function Login() {
  const router = useRouter();
  const { data, status } = useSession();
  const cookies = new Cookies();
  if (status === "authenticated") {
    // TODO 저장되는 쿠키 key값 변경 예정
    cookies.get("user") !== undefined ? router.push("/") : loginApi(data.user);
  }
  return (
    <Container>
      <NaverBtn onClick={() => signIn("naver")}>
        <Logo src="/images/naver.png" />
        <Title>네이버 로그인</Title>
      </NaverBtn>
      <GoogleBtn onClick={() => signIn("google")}>
        <GoogleLogo src="/images/google.png" />
        <Title style={{ color: "#4d4949" }}>Google 로그인</Title>
      </GoogleBtn>
    </Container>
  );
}

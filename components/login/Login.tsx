import loginApi from "@/core/api/login/loginApi";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { Toast } from "../Toast";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
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

export default function Login() {
  const router = useRouter();
  const { data, status } = useSession();
  const [errorMessage, setErrorMessage] = useState("");
  if (status === "authenticated") {
    (async () => {
      const response = await loginApi(data.user);
      response.status === 200
        ? router.push("/")
        : setErrorMessage(response.statusText);
    })();
  }
  return (
    <Container>
      <Toast
        action={errorMessage === "" ? 0 : 1}
        message={errorMessage}
      ></Toast>
      <Logo src="/images/logo.svg"></Logo>
      <NaverBtn onClick={() => signIn("naver")}>
        <NaverLogo src="/images/naver.png" />
        <Title color={"white"}>네이버 로그인</Title>
      </NaverBtn>
      <GoogleBtn onClick={() => signIn("google")}>
        <GoogleLogo src="/images/google.png" />
        <Title color={"#4d4949"}>Google 로그인</Title>
      </GoogleBtn>
    </Container>
  );
}

import loginApi from "@/core/api/login/loginApi";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { IAuth, loginUser } from "slices/auth";
import { setMessage, ToastType } from "slices/toast";
import { AuthReducerType } from "slices";

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

export default function Login() {
  const { data, status } = useSession();
  const router = useRouter();
  const {
    auth: { isLogined },
  } = useSelector<AuthReducerType, IAuth>((state) => state);
  const dispatch = useDispatch();

  //  && status === "authenticated"
  if (isLogined === false) {
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
        console.log(isLogined);
        // router.push("/");
      } else {
        dispatch(setMessage({ message: response.statusText } as ToastType));
      }
    })();
  }

  return (
    <Container>
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

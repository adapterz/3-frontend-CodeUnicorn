import { useRouter } from "next/router";
import { useEffect } from "react";
import loginApi from "../core/api/api";

export default function NaverLogin() {
  const router = useRouter();
  useEffect(() => {
    Login();
  }, []);

  const Login = () => {
    naverOauth();
    // 로그인 API 요청
    loginApi(getTokenData);
  };

  // 네이버 소셜 로그인 요청
  function naverOauth() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.NAVER_CLIENT_ID,
      callbackUrl: process.env.LOCAL_URL,
      isPopup: false,
      loginButton: { color: "", type: 3, height: 50 },
      callbackHandle: true,
    });
    naverLogin.init();
  }

  // accessToken, state 가져오기
  function getTokenData() {
    const data = {
      token: router.asPath.split("=")[1],
      state: router.asPath.split("&")[3],
    };
    return data;
  }

  return <div id="naverIdLogin" onClick={Login}></div>;
}

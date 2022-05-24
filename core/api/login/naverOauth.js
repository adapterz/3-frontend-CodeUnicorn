// 네이버 소셜 로그인 요청
export default function naverOauth() {
  const naverLogin = new naver.LoginWithNaverId({
    clientId: process.env.NAVER_CLIENT_ID,
    callbackUrl: "http://127.0.0.1:3000/login",
    isPopup: false,
    loginButton: { color: "", type: 3, height: 50 },
    callbackHandle: true,
  });
  naverLogin.init();
}

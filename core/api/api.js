import axios from "axios";
import { Cookies } from "react-cookie";

const dumyUser = {
  email: "test@gmail.com",
  sessionId: "682AEDVSKSDJF23423ASDCD",
};

// 로그인 API 구현
export default async function loginApi(tokenData) {
  const { token, state } = tokenData();
  const cookies = new Cookies();

  const response = await axios.post("http://localhost:3000/users/login", {
    headers: {
      "Content-Type": "application/json",
      data: { token: token, state: state },
    },
  });
  response.state === 200
    ? // 세션 ID 저장
      cookies.set(dumyUser.email, dumyUser.sessionId, {
        path: "/",
        secure: true,
        httpOnly: true,
      })
    : // TODO 실패 처리 예정
      alert("로그인 실패");
}

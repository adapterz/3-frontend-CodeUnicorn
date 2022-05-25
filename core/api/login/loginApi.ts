import { Cookies } from "react-cookie";
import Methods from "@/util/methods";
import comonApi from "@/core/api/api";

const dumyUser = {
  email: "test@gmail.com",
  sessionId: "682AEDVSKSDJF23423ASDCD",
};

// 로그인 API 구현
export default async function loginApi(token: string) {
  const cookies = new Cookies();
  const response = await comonApi(Methods.POST, process.env.LOGIN_API_URL, {
    headers: {
      "Content-Type": "application/json",
      data: { token: token },
    },
  });

  response.status === 200
    ? // 세션 ID 저장
      cookies.set(dumyUser.email, dumyUser.sessionId, {
        path: "/",
        secure: true,
        httpOnly: true,
      })
    : // TODO 실패 처리 예정
      alert("로그인 실패");
}

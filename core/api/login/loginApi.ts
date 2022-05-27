import { Cookies } from "react-cookie";
import Methods from "@/util/methods";
import comonApi from "@/core/api/api";
import { IUser } from "@/interface/user";

// 로그인 API 구현
export default async function loginApi(user: IUser) {
  const cookies = new Cookies();

  const response = await comonApi(Methods.POST, process.env.LOGIN_API_URL, {
    headers: {
      "Content-Type": "application/json",
    },
    body: user,
  });

  if (response.status !== 200) throw new Error(response.statusText);

  // TODO 추후에 header.setCookie로 수정 예정
  cookies.set(user.email, user.name, {
    path: "/",
    secure: true,
    httpOnly: true,
  });
}

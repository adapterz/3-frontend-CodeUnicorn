import { IUser } from "@/interface/user";
import axios from "axios";

// 로그인 API 구현
export default async function loginApi(user: IUser) {
  // 네이버 Auth에서 name를 내려오지 않기 떄문에 default name 전달
  if (user.email.includes("naver.com")) {
    user.name = user.email.substring(0, user.email.indexOf("@"));
  }
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
    {
      email: user.email,
      nickname: user.name,
    },
    {
      headers: {
        withCredentials: true,
        "Content-Type": "application/json",
      },
    },
  );

  console.log(response.headers);

  return response;
}

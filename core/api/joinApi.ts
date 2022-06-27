import { IUser } from "@/interface/user";
import axios from "axios";

export default async function joinApi(user: IUser) {
  // 네이버 Auth에서 name이 내려오지 않기 떄문에 default name 전달
  if (user.email.includes("naver.com")) {
    user.name = user.email.substring(0, user.email.indexOf("@"));
  }

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/signup`,
    {
      email: user.email,
      nickname: user.name,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return response;
}

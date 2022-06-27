import { IUser } from "@/interface/user";
import axios from "axios";

// 로그인 API 구현
export default async function loginApi(user: IUser) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
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

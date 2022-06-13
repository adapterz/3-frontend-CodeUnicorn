import Methods from "@/util/methods";
import comonApi from "@/core/api/api";
import { IUser } from "@/interface/user";

// 로그인 API 구현
export default async function loginApi(user: IUser) {
  const response = await comonApi(
    Methods.POST,
    process.env.NEXT_PUBLIC_LOGIN_API_URL,
    {
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    },
  );

  return response;
}

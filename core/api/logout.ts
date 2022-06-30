import axios from "axios";

export default async function logout(cookie: string) {
  const response = await axios.delete(
    "https://api.codeunicorn.kr/users/logout",
    {
      headers: {
        cookie: cookie,
      },
    },
  );

  return response;
}

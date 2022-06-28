import axios from "axios";

export default async function logout(cookie : string) {

    const response = await axios.delete("https://codeunicorn.kr/users/logout", {
      headers : {
        loginSessionId : cookie,
      }
    });

    return response;
}

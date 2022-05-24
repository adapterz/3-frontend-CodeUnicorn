import { useRouter } from "next/router";
import { useEffect } from "react";
import loginApi from "../../core/api/login/loginApi";
import { loginProps } from "../../interface/login";

export default function Login({ naverOauth }: loginProps) {
  useEffect(() => naverOauth(), []);
  const router = useRouter();
  const token = router.asPath.split("=")[1];
  if (token !== undefined) router.push("/");

  return (
    <div>
      <div
        id="naverIdLogin"
        onClick={() => {
          naverLoginEvent(token);
        }}
      ></div>
      <div>Apple Login</div>
    </div>
  );
}

function naverLoginEvent(token: string) {
  loginApi(token);
}

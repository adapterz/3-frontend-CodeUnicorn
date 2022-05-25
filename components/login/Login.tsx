import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import loginApi from "../../core/api/login/loginApi";
import { loginProps } from "../../interface/login";

export default function Login({ naverOauth, googleOauth }: loginProps) {
  useEffect(() => {
    naverOauth();
    googleOauth();
  }, []);
  const router = useRouter();
  const token = router.asPath.split("=")[1];
  if (token !== undefined) router.push("/");
  return (
    <div>
      <Head>
        <meta
          name="google-signin-client_id"
          content="747350971501-27cdrcom8h5vual6idia9cl0u0jblb0v.apps.googleusercontent.com"
        />
      </Head>
      <div
        id="naverIdLogin"
        onClick={() => {
          naverLoginEvent(token);
        }}
      ></div>
      <div id="my-signin2"></div>
    </div>
  );
}

function naverLoginEvent(token: string) {
  loginApi(token);
}

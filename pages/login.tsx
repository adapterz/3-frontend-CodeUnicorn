import naverOauth from "@/core/api/login/naverOauth";
import Login from "@/components/login/Login";
import googleOauth from "@/core/api/login/googleOauth";

export default function login() {
  return <Login naverOauth={naverOauth} googleOauth={googleOauth} />;
}

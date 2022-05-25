import naverOauth from "../core/api/login/naverOauth";
import googleOauth from "../core/api/login/googleOauth";
import Login from "../components/login/Login";

export default function login() {
  return <Login naverOauth={naverOauth} googleOauth={googleOauth} />;
}

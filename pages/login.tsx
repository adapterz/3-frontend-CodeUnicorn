import naverOauth from "../core/api/login/naverOauth";
import Login from "../components/login/Login";

export default function login() {
  return <Login naverOauth={naverOauth} />;
}

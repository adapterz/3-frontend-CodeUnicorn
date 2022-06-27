import styled from "styled-components";
import Aside from "@/components/user/Aside";
import Profile from "@/components/user/Profile";
import { useSelector } from "react-redux";
import { AuthReducerType } from "slices";
import { IAuth } from "slices/auth";
import { useRouter } from "next/router";
import Auth from "@/components/Auth";
import { Cookies } from "react-cookie";

const Container = styled.div`
  width: 850px;
  margin: 0px auto;
  display: flex;
`;

function user() {
  const cookies = new Cookies();
  const router = useRouter();
  const {
    auth: { userId, userName, image },
  } = useSelector<AuthReducerType, IAuth>((state) => state);

  // userId에 해당하지 않는 페이지 접근제한
  router.query.userId !== undefined &&
    Number(router.query.userId) !== userId &&
    router.push("/404");

  return (
    <Container>
      {cookies.get("user") !== undefined ? (
        <>
          <Aside />
          <Profile userId={userId} currentName={userName} image={image} />
        </>
      ) : (
        <Auth />
      )}
    </Container>
  );
}

export default user;

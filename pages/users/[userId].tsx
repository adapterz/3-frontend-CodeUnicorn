import styled from "styled-components";
import Aside from "@/components/user/Aside";
import Profile from "@/components/user/Profile";
import { useSelector } from "react-redux";
import { AuthReducerType } from "slices";
import { IAuth } from "slices/auth";
import { useRouter } from "next/router";
import Auth from "@/components/Auth";

const Container = styled.div`
  width: 850px;
  margin: 0px auto;
  display: flex;
`;

function user() {
  const router = useRouter();
  const {
    auth: { isLogined, userId, userName, image },
  } = useSelector<AuthReducerType, IAuth>((state) => state);

  return (
    <Container>
      <Aside />
      <Profile userId={userId} userName={userName} image={image} />
      {/* {isLogined === true && router.asPath === `/users/${userId}` ? (
        <>
          <Aside />
          <Profile userId={userId} userName={userName} image={image} />
        </>
      ) : (
        <Auth />
      )} */}
    </Container>
  );
}

export default user;

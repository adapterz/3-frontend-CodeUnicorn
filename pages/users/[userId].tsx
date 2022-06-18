import styled from "styled-components";
import Aside from "@/components/user/Aside";
import Profile from "@/components/user/Profile";
import { useSelector } from "react-redux";
import { AuthReducerType } from "slices";
import { IAuth } from "slices/auth";
import Auth from "@/components/Auth";

const Container = styled.div`
  width: 850px;
  margin: 0px auto;
  display: flex;
`;

function user() {
  const {
    auth: { isLogined },
  } = useSelector<AuthReducerType, IAuth>((state) => state);
  return (
    <Container>
      <Aside />
      <Profile />
      {/* {isLogined === true ? (
        <>
          <Aside />
          <Profile />
        </>
      ) : (
        <Auth />
      )} */}
    </Container>
  );
}

export default user;

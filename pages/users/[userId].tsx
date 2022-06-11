import styled from "styled-components";
import Aside from "@/components/user/Aside";
import Profile from "@/components/user/Profile";

const Container = styled.div`
  width: 850px;
  margin: 0px auto;
  display: flex;
`;

function user() {
  return (
    <Container>
      <Aside />
      <Profile />
    </Container>
  );
}

export default user;

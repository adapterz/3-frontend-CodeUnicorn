import styled from "styled-components";
import SideCategory from "../SideCategory";

const Container = styled.div`
  margin-top: 3rem;
`;

const Aside = () => {
  return (
    <Container>
      <SideCategory
        title="설정"
        options={["내정보", "이력서", "알림"]}
        active={true}
      />
    </Container>
  );
};

export default Aside;

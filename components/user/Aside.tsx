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
      <SideCategory
        title="나의 교육"
        options={["나의 교육 목록", "후기"]}
        active={false}
      />
    </Container>
  );
};

export default Aside;

import { useRouter } from "next/router";
import styled from "styled-components";
import SideCategory from "../SideCategory";

const Container = styled.div`
  margin-top: 60px;
`;

const Aside = () => {
  const { query } = useRouter();

  return (
    <Container>
      <SideCategory
        title="설정"
        options={[{ key: "my-page", name: "내정보" }]}
        active={
          query.option === "my-page" || query.option === "aram" ? true : false
        }
      />
      <SideCategory
        title="나의 교육"
        options={[{ key: "my-courses", name: "교육 목록" }]}
        active={
          query.option === "my-courses" || query.option === "review"
            ? true
            : false
        }
      />
    </Container>
  );
};

export default Aside;

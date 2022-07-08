import styled from "styled-components";
import Sort from "@/components/Sorts";

const Container = styled.div`
  width: 1040px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px 0px;
  }
`;

const TotalCourse = styled.div`
  margin-left: 0.5rem;
  b {
    font-weight: bold;
  }
`;

function CoursesInfo({ totalCourses }) {
  return (
    <Container>
      <TotalCourse>
        <b>{totalCourses}개</b>의 교육을 찾았습니다!
      </TotalCourse>
      <Sort />
    </Container>
  );
}

export default CoursesInfo;

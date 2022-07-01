import styled from "styled-components";
import Catagoryes from "../Catagories";
import Course from "../Course";
import PageBtns from "../PageBtns";
import CoursesInfo from "./CoursesInfo";
import { CourseTypes } from "@/interface/course";
import Loading from "../Loading";

const Container = styled.div`
  width: 100%;
  min-height: 1100px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CourseList = styled.div`
  width: 850px;
  display: flex;
  margin: 0px auto;
  flex-wrap: wrap;
  gap: 20px 2%;

  div {
    width: 270px;
    margin-bottom: 40px;
  }

  h2 {
    width: 270px;
  }
`;

function CoursesTemplate({
  courses,
  totalCourses,
  category,
  currentPage,
  maxPage,
  onSelect,
  onIncresive,
  onDecresive,
}) {
  return (
    <Container>
      <Catagoryes category={category} onSelect={onSelect} />
      <CoursesInfo totalCourses={totalCourses} />
      {courses.length === 0 ? (
        <Loading />
      ) : (
        <CourseList>
          {courses.map((course: CourseTypes) => (
            <Course key={course.id} course={course} width={280} height={200} />
          ))}
        </CourseList>
      )}
      <PageBtns
        currentPage={currentPage}
        maxPage={maxPage}
        onSelect={onSelect}
        onIncresive={onIncresive}
        onDecresive={onDecresive}
      />
    </Container>
  );
}

export default CoursesTemplate;

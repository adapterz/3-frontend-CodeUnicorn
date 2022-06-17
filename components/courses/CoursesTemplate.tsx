import styled from "styled-components";
import Catagoryes from "../Catagories";
import Course from "../Course";
import PageBtns from "../PageBtns";
import CoursesInfo from "./CoursesInfo";
import { CourseTypes } from "@/interface/course";

const Container = styled.div`
  width: 100%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CourseList = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
  flex-wrap: wrap;

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
      <CoursesInfo courses={courses} />
      <CourseList>
        {courses.map((course: CourseTypes) => (
          <Course key={course.id} course={course} />
        ))}
      </CourseList>
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

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
`;

const CourseList = styled.div`
  width: 1040px;
  display: flex;
  margin: 0px auto;
  flex-wrap: wrap;
  gap: 52px 36px;
  margin-bottom: 76px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 100%;
    justify-content: center;
    gap: 25px 0px;
    text-align: center;

    .Course__Rating-sc-6ii2hv-5 {
      display: none;
    }
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
            <Course key={course.id} course={course} width={320} height={200} />
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

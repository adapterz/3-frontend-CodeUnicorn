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
<<<<<<< HEAD
  totalCourses,
  category,
  currentPage,
  maxPage,
=======
  category,
  page,
>>>>>>> 5bed03b9f954b57fcf815461b16c3c64e62cd756
  onSelect,
  onIncresive,
  onDecresive,
}) {
  return (
    <Container>
      <Catagoryes category={category} onSelect={onSelect} />
<<<<<<< HEAD
      <CoursesInfo totalCourses={totalCourses} />
      {courses.length === 0 ? (
        <Loading />
      ) : (
        <CourseList>
          {courses.map((course: CourseTypes) => (
            <Course key={course.id} course={course} />
          ))}
        </CourseList>
      )}
      <PageBtns
        currentPage={currentPage}
        maxPage={maxPage}
=======
      <CoursesInfo courses={courses} />
      <CourseList>
        {courses.map((coures: ICategoryItem) => (
          <Course key={coures.id} coures={coures} />
        ))}
      </CourseList>
      <PageBtns
        page={page}
>>>>>>> 5bed03b9f954b57fcf815461b16c3c64e62cd756
        onSelect={onSelect}
        onIncresive={onIncresive}
        onDecresive={onDecresive}
      />
    </Container>
  );
}

export default CoursesTemplate;

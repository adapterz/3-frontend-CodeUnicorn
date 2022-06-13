import styled from "styled-components";
import Catagoryes from "../Catagories";
import Course from "../Course";
import PageBtns from "../PageBtns";
import CoursesInfo from "./CoursesInfo";
import { ICategoryItem } from "@/interface/category";
import Link from "next/link";

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
  page,
  onSelect,
  onIncresive,
  onDecresive,
}) {
  return (
    <Container>
      <Catagoryes category={category} onSelect={onSelect} />
      <CoursesInfo courses={courses} />
      <CourseList>
        {courses.map((coures: ICategoryItem) => (
          <Course key={coures.id} coures={coures} />
        ))}
      </CourseList>
      <PageBtns
        page={page}
        onSelect={onSelect}
        onIncresive={onIncresive}
        onDecresive={onDecresive}
      />
    </Container>
  );
}

export default CoursesTemplate;

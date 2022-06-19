import styled from "styled-components";
import Course from "@/components/Course";
import Catagories from "../Catagories";
import Link from "next/link";
import Slider from "../Slider";
import { CourseTypes } from "@/interface/course";
import Loading from "../Loading";

const Container = styled.main`
  margin: 0px auto;
  width: 1200px;
  margin-bottom: 50px;
`;

const Section = styled.section`
  position: relative;
  margin-top: 80px;
  min-height: 390px;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .show__more {
    color: #4e4e4e;
    font-size: 20px;
    position: absolute;
    top: 4px;
    right: 1.125rem;
  }

  .right__arrow {
    right: -5px !important;
  }
`;

const CourseList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type ContentsProps = {
  courses: CourseTypes[];
  category: string;
  categoryCourses: CourseTypes[];
  onSelect: (category: string) => void;
};

function Contents({
  courses,
  category,
  categoryCourses,
  onSelect,
}: ContentsProps) {
  return (
    <Container>
      <Section>
        <h1>프론트엔드 강의</h1>
        <Link href="/courses">
          <a>
            <span className="show__more">더보기 &gt;</span>
          </a>
        </Link>
        <CourseList>
          {courses === undefined ? (
            courses
              .filter((course: CourseTypes) => course.category === "프론트엔드")
              .slice(0, 4)
              .map((course: CourseTypes) => (
                <Course key={course.id} course={course} />
              ))
          ) : (
            <Loading />
          )}
        </CourseList>
      </Section>
      <Section>
        <h1>백엔드 강의</h1>
        <Slider courses={courses} width="1200px" />
      </Section>
      <Section>
        <h1>맞춤 강의</h1>
        <Catagories category={category} onSelect={onSelect} />
        {categoryCourses === undefined ? (
          <CourseList>
            {categoryCourses.map((coures: CourseTypes) => (
              <Course key={coures.id} course={coures} />
            ))}
          </CourseList>
        ) : (
          <Loading />
        )}
      </Section>
    </Container>
  );
}

export default Contents;

import styled from "styled-components";
import Course from "@/components/Course";
import Link from "next/link";
import Slider from "../Slider";
import { CourseTypes } from "@/interface/course";
import Loading from "../Loading";

const Container = styled.main`
  width: 100%;
  margin: 0px auto;
  margin-top: 73px;
`;

const Section = styled.section`
  width: 1040px;
  min-height: 320px;
  margin: 0px auto;
  margin-bottom: 32px;
  position: relative;

  h1 {
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: 700;
    line-height: 33px;
  }

  .show__more {
    color: #4e4e4e;
    position: absolute;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    top: 12px;
    right: 4px;

    @media screen and (min-width: 0px) and (max-width: 412px) {
      width: 100%;
      display: none;
    }
  }

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid gray;
    padding-bottom: 30px;

    &:nth-child(2) {
      display: none;
    }

    .Course__Rating-sc-6ii2hv-5 {
      display: none;
    }
  }
`;

const CourseList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px 0px;
  }
`;

type ContentsProps = {
  courses: CourseTypes[];
  backCourses: CourseTypes[];
};

function Contents({ courses, backCourses }: ContentsProps) {
  return (
    <Container>
      <Section>
        <h1>프론트엔드 강의</h1>
        <Link href="/courses?category=frontend&sortby=popular">
          <a>
            <span className="show__more">더보기 &gt;</span>
          </a>
        </Link>
        <CourseList>
          {courses.length === 0 ? (
            <Loading />
          ) : (
            courses
              .filter((course: CourseTypes) => course.category === "프론트엔드")
              .slice(0, 4)
              .map((course: CourseTypes) => (
                <Course
                  key={course.id}
                  course={course}
                  width={230}
                  height={150}
                />
              ))
          )}
        </CourseList>
      </Section>
      <Section>
        <h1>백엔드 강의</h1>
        <Slider courses={backCourses} width="1040px" />
      </Section>
    </Container>
  );
}

export default Contents;

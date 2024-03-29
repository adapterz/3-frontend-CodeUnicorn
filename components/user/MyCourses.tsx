import { CourseTypes } from "@/interface/course";
import styled from "styled-components";
import Course from "../Course";

type ContainerType = {
  display: string;
};

const Container = styled.div<ContainerType>`
  width: 800px;
  min-height: 850px;
  margin-left: 78px;
  margin-bottom: 100px;
  margin-top: 60px;
  display: ${(props) => props.display};

  .Course__Container-sc-6ii2hv-0 {
    width: 230px;
  }
`;

const WatchingBox = styled.div`
  min-width: 800px;
  margin-bottom: 74px;
`;

const LikesBox = styled.div`
  min-width: 800px;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding-bottom: 10px;
  border-bottom: 1px solid #c4c4c4;
`;

const CoursesBox = styled.div`
  min-width: 800px;
  min-height: 300px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px 55px;
`;

type MyCoursesProps = {
  likeCourses: CourseTypes[];
  applyCourses: CourseTypes[];
  active: boolean;
};

const MyCourses = ({ likeCourses, applyCourses, active }: MyCoursesProps) => {
  return (
    <Container display={active ? "block" : "none"}>
      <WatchingBox>
        <Title>내가 보고있는 교육</Title>
        <CoursesBox>
          {applyCourses.map((course: CourseTypes) => (
            <Course
              key={course.name}
              course={course}
              width={230}
              height={150}
            />
          ))}
        </CoursesBox>
      </WatchingBox>
      <LikesBox>
        <Title>관심있는 교육</Title>
        <CoursesBox>
          {likeCourses.map((course: CourseTypes) => (
            <Course
              key={course.name}
              course={course}
              width={230}
              height={150}
            />
          ))}
        </CoursesBox>
      </LikesBox>
    </Container>
  );
};

export default MyCourses;

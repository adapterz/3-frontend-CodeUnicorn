import styled from "styled-components";
import Catagories from "@/components/Catagories";
import Loading from "@/components/Loading";
import Course from "@/components/Course";
import { CourseTypes } from "@/interface/course";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 1200px;
  min-height: 410px;
  margin-top: 80px;
  margin: 0px auto;
  margin-bottom: 50px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 1200px;
    margin: 0px auto;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner-border {
    margin-top: 5rem;
  }
`;

const CourseList = styled.div`
  width: 100%;
  min-height: 340px;
  display: flex;
`;

function Custom() {
  const [category, setCategory] = useState("all");
  const [categoryCourses, setCategoryCourses] = useState([]);

  function onSelect(category: string) {
    setCategory(category);
  }

  // 카테고리별 강의 데이터
  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await axios.get(
        `https://api.codeunicorn.kr/courses?category=${category}&sortby=popular&page=1`,
      );
      setCategoryCourses(data.courses.splice(0, 4));
    })();
  }, [category]);

  return (
    <Container>
      <Title>맞춤 강의</Title>
      <Catagories category={category} onSelect={onSelect} />
      {categoryCourses.length === 0 ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <CourseList>
          {categoryCourses.map((coures: CourseTypes) => (
            <Course key={coures.id} course={coures} />
          ))}
        </CourseList>
      )}
    </Container>
  );
}

export default Custom;

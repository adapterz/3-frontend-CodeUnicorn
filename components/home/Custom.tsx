import styled from "styled-components";
import Catagories from "@/components/Catagories";
import Loading from "@/components/Loading";
import Course from "@/components/Course";
import { CourseTypes } from "@/interface/course";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  margin-bottom: 32px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 100%;
    text-align: center;
    padding-bottom: 30px;
  }
`;

const InnerContainer = styled.div`
  width: 1040px;
  margin: 0px auto;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 412px;
    text-align: center;
  }
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
  margin-top: 20px;
  min-height: 340px;
  display: flex;
  gap: 40px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 412px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px 0px;

    .Course__Rating-sc-6ii2hv-5 {
      display: none;
    }
  }
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
      const response = await axios.get(
        `https://api.codeunicorn.kr/courses?category=${category}&sortby=popular&page=1`,
        { validateStatus: false as any },
      );
      response.status === 200
        ? setCategoryCourses(response.data.data.courses.splice(0, 4))
        : setCategoryCourses([]);
    })();
  }, [category]);

  return (
    <Container>
      <InnerContainer>
        <Title>맞춤 강의</Title>
        <Catagories category={category} onSelect={onSelect} />
        {categoryCourses.length === 0 ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <CourseList>
            {categoryCourses.map((coures: CourseTypes) => (
              <Course
                key={coures.id}
                course={coures}
                width={280}
                height={200}
              />
            ))}
          </CourseList>
        )}
      </InnerContainer>
    </Container>
  );
}

export default Custom;

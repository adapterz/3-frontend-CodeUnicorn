import Course from "@/components/Course";
import Loading from "@/components/Loading";
import axios from "axios";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Concatiner = styled.div`
  min-height: 900px;
  width: 1040px;
  margin: 40px auto;

  .Loading__Container-sc-1iqxo1z-0 {
    height: 900px;
  }

  .Loading__InfoMessage-sc-1iqxo1z-3 {
    margin: 0px auto;
  }
`;

const CourseList = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 37px;
`;

function search() {
  const [courses, setCourse] = useState([]);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      const {
        data: { courses },
      } = await axios.get(
        `https://api.codeunicorn.kr/courses/search?keyword=${query.keyword}`,
        { validateStatus: false as any },
      );
      setCourse(courses);
    })();
  }, [query.keyword]);
  return (
    <Concatiner>
      <NextSeo
        title={`코드유니콘 | ${query.keyword}의 검색 결과`}
        description="다양한 강의들을 검색해보고 보고싶은 강의를 무료로 수강하세요."
        openGraph={{
          type: "website",
          locale: "ko_KR",
          url: `https://codeunicorn.kr/search${query.keyword}`,
          title: `코드유니콘 | ${query.keyword}의 검색 결과`,
          description:
            "다양한 강의들을 검색해보고 보고싶은 강의를 무료로 수강하세요.",
          site_name: "코드유니콘",
          images: [
            {
              url: "/images/logo.svg",
              width: 285,
              height: 160,
              alt: "로고 이미지",
            },
          ],
        }}
      ></NextSeo>
      {!courses ? (
        <Loading />
      ) : (
        <CourseList>
          {courses.map((course) => (
            <Course course={course} width={230} height={150} />
          ))}
        </CourseList>
      )}
    </Concatiner>
  );
}

export default search;

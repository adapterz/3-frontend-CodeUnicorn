import Player from "@/components/player/Player";
import styled from "styled-components";
import Auth from "@/components/Auth";
import axios from "axios";
import { Cookies } from "react-cookie";
import { GetStaticPaths, GetStaticProps } from "next";
import { CourseTypes } from "@/interface/course";
import { NextSeo } from "next-seo";

const Container = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  background-color: white;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 1400px;
  }
`;

function lecture({ courseDetail, curriculum, lecture }) {
  const cookie = new Cookies();

  return (
    <Container>
      <NextSeo
        title={`코드유니콘 | 강의 시청 페이지`}
        description="다양한 강의를 무료로 학습하면서 많은 지식을 쌓을 수 있습니다."
      ></NextSeo>
      {cookie.get("SESSION") !== undefined ? (
        <Player
          courseDetail={courseDetail}
          curriculum={curriculum}
          lecture={lecture}
        />
      ) : (
        <Auth />
      )}
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // 전체 강의 API
  const {
    data: { courses },
  } = await axios.get("https://api.codeunicorn.kr/courses/all");

  // lectureId를 꺼내기 위한 로직
  let lectureIds = [];

  for (let i = 1; i <= courses.length; i++) {
    const {
      data: { data: curriculum },
    } = await axios.get(`https://api.codeunicorn.kr/courses/${i}/curriculum`);
    lectureIds.push(curriculum.sections[0].lectures[0].id);
  }

  const paths = courses.map((course: CourseTypes, index) => ({
    params: {
      courseId: course.id.toString(),
      lecture: lectureIds[index].toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // 강의 상세 정보 API
  const {
    data: { data: courseDetail },
  } = await axios.get(`https://api.codeunicorn.kr/courses/${params.courseId}`);

  const {
    data: { data: curriculum },
  } = await axios.get(
    `https://api.codeunicorn.kr/courses/${params.courseId}/curriculum`,
  );

  const {
    data: {
      data: { lecture },
    },
  } = await axios.get(
    `https://api.codeunicorn.kr/courses/${params.courseId}/lectures/${params.lecture}`,
  );

  if (!courseDetail || !curriculum || !lecture) {
    return {
      notFound: true,
    };
  }

  return {
    props: { courseDetail, curriculum, lecture },
    revalidate: 86400,
  };
};

export default lecture;

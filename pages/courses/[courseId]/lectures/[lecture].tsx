import Player from "@/components/player/Player";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setMessage, ToastType } from "slices/toast";
import Auth from "@/components/Auth";
import axios from "axios";
import { Cookies } from "react-cookie";
import { GetStaticPaths, GetStaticProps } from "next";

const Container = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  background-color: white;
`;

function lecture({ courseDetail, curriculum }) {
  const cookie = new Cookies();
  const { query } = useRouter();
  const [lecture, setLecture] = useState({});
  const dispatch = useDispatch();

  // 강의 상세 정보를 가져오는 로직
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.codeunicorn.kr/courses/${query.courseId}/lectures/${query.lecture}`,
      );
      response.status === 200
        ? setLecture(response.data.data.lecture)
        : dispatch(
            setMessage({ message: "강의 정보를 가져오는데 실패했습니다." }),
          );
    })();
  }, [query.lecture]);

  return (
    <Container>
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
  // let lectureIds = [];

  // for (let i = 1; i <= courses.length; i++) {
  //   const {
  //     data: { data: curriculum },
  //   } = await axios.get(`https://api.codeunicorn.kr/courses/${i}/curriculum`);
  //   lectureIds.push(curriculum.sections[0].id);
  // }

  const paths = courses.map((course, index) => ({
    params: {
      courseId: course.id.toString(),
      // lecture: lectureIds[index].toString(),
      lecture: "1",
    },
  }));

  return {
    paths,
    fallback: false,
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

  // const {
  //   data: {
  //     data: { lecture },
  //   },
  // } = await axios.get(
  //   `https://api.codeunicorn.kr/courses/${params.courseId}/lectures/${params.lecture}`,
  // );

  // if (!courseDetail || !curriculum) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: { courseDetail, curriculum },
    revalidate: 86400,
  };
};

export default lecture;

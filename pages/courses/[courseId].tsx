import CourseInfo from "@/components/course/CourseInfo";
import Curriculum from "@/components/course/Curriculum";
import Introduction from "@/components/course/Introduction";
import Recomend from "@/components/course/Recomend";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "slices/toast";

// TODO typeScript 적용 해야함(props)
function course({ courseDetail, curriculum, recommendCourses }) {
  const dispatch = useDispatch();

  const onLike = useCallback(() => {
    dispatch(setMessage({ message: "관심 교육 등록은 준비 중입니다." }));
  }, []);

  return (
    <>
      <CourseInfo
        courseDetail={courseDetail}
        instructor={courseDetail.instructor}
        initLecture={curriculum.sections[0].lectures[0].id}
        lectureCount={curriculum.sections[0].lectureCount}
        onLike={onLike}
      />
      <Introduction
        courseDetail={courseDetail}
        instructor={courseDetail.instructor}
      />
      <Curriculum curriculum={curriculum.sections} />
      <Recomend recommendCourses={recommendCourses} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { courses },
  } = await axios.get("https://api.codeunicorn.kr/courses/all");

  const paths = courses.map((course) => ({
    params: { courseId: course.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // 전체 강의 API
  const {
    data: { courses },
  } = await axios.get("https://api.codeunicorn.kr/courses/all");

  // 강의 상세 정보 API
  const {
    data: { data: courseDetail },
  } = await axios.get(`https://api.codeunicorn.kr/courses/${params.courseId}`);

  // 강의 커리큘럼 API
  const {
    data: { data: curriculum },
  } = await axios.get(
    `https://api.codeunicorn.kr/courses/${params.courseId}/curriculum`,
  );

  // 추천 강의 API
  const recommendCourses = [];

  for (let i = 1; i <= 9; i++) {
    let randomNum = Math.floor(Math.random() * courses.length) + 1;
    const {
      data: { data },
    } = await axios.get(`https://api.codeunicorn.kr/courses/${randomNum}`);
    recommendCourses.push(data);
  }

  if (!course || !curriculum || !recommendCourses) {
    return {
      notFound: true,
    };
  }

  return {
    props: { courseDetail, curriculum, recommendCourses },
    revalidate: 86400,
  };
};

export default course;

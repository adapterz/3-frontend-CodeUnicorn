import CourseInfo from "@/components/course/CourseInfo";
import Curriculum from "@/components/course/Curriculum";
import Introduction from "@/components/course/Introduction";
import Recomend from "@/components/course/Recomend";
import { getLikeCourses } from "@/core/api/likesApi";
import { CourseTypes, CurriculumTypes } from "@/interface/course";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useSelector } from "react-redux";
import { AuthReducerType } from "slices";
import { IAuth } from "slices/auth";

type courseProps = {
  courseDetail: CourseTypes;
  curriculum: CurriculumTypes;
  recommendCourses: CourseTypes;
};

function course({ courseDetail, curriculum, recommendCourses }: courseProps) {
  const cookie = new Cookies();
  const [isLike, setIsLike] = useState(false);
  const { query } = useRouter();

  const {
    auth: { userId },
  } = useSelector<AuthReducerType, IAuth>((state) => state);

  // 로그인한 유저의 관심 강의 목록 API
  useEffect(() => {
    (async () => {
      const {
        data: { courses },
      } = await getLikeCourses(userId.toString());
      const result = courses.filter(
        (course: CourseTypes) => course.id === Number(query.courseId),
      );
      result.length === 0 ? setIsLike(false) : setIsLike(true);
    })();
  }, [query.courseId]);

  // 바로 학습하기 API
  const onBegin = useCallback(async () => {
    await axios.post(
      `https://api.codeunicorn.kr/courses/${query.courseId}/apply`,
      {
        headers: {
          cookie: cookie.get("SESSION"),
        },
      },
    );
  }, []);

  // 관심 교육 등록 API
  const onLike = useCallback(async () => {
    await axios.post(
      `https://api.codeunicorn.kr/courses/${query.courseId}/likes`,
      {
        headers: {
          cookie: cookie.get("SESSION"),
        },
      },
    );
  }, []);

  // 관심 교육 취소 API
  const onCancle = useCallback(async () => {
    await axios.delete(
      `https://api.codeunicorn.kr/courses/${query.courseId}/likes`,
      {
        headers: {
          cookie: cookie.get("SESSION"),
        },
      },
    );
  }, []);

  return (
    <>
      <NextSeo
        title={`코드유니콘 | ${courseDetail.name} 강의`}
        description={courseDetail.description}
      />
      <CourseInfo
        courseDetail={courseDetail}
        instructor={courseDetail.instructor}
        initLecture={curriculum.sections[0].lectures[0].id}
        lectureCount={curriculum.sections[0].lectureCount}
        isLike={isLike}
        onBegin={onBegin}
        onLike={onLike}
        onCancle={onCancle}
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
    const {
      data: { data },
    } = await axios.get(`https://api.codeunicorn.kr/courses/${i}`);
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

import CoursesTemplate from "@/components/courses/CoursesTemplate";
import axios from "axios";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Courses = ({ courses }) => {
  const router = useRouter();
  const [category, setCategory] = useState(router.query.category || "all");
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState([]);
  const [coursesByCategory, setCoursesByCategory] = useState(courses.courses);
  const [totalCourses, setTotalCourses] = useState(courses.courseCount);

  // 카테고리별 강의 조회 API
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.codeunicorn.kr/courses?category=${category}&sortby=${router.query.sortby}&page=${currentPage}`,
        { validateStatus: false as any },
      );
      if (response.status === 200) {
        setCoursesByCategory(response.data.data.courses);
        setTotalCourses(response.data.data.courseCount);
      } else {
        setCoursesByCategory([]);
        setTotalCourses(0);
      }
    })();
  }, [category, router.query.sortby, currentPage]);

  // 카테고리별 강의 조회 API
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.codeunicorn.kr/courses?category=${category}&sortby=${router.query.sortby}&page=${currentPage}`,
        { validateStatus: false as any },
      );
      if (response.status === 200) {
        setCoursesByCategory(response.data.data.courses);
        setTotalCourses(response.data.data.courseCount);
      } else {
        setCoursesByCategory([]);
        setTotalCourses(0);
      }
    })();
  }, [category, router.query.sortby, currentPage]);

  // 자동 페이지 버튼 생성을 위한 로직
  useEffect(() => {
    let pageArr = [];
    for (let i = 1; i <= Math.ceil(totalCourses / 9); i++) {
      pageArr.push(i);
    }
    setMaxPage(pageArr);
  }, [coursesByCategory]);

  function onSelect(data: string | number) {
    if (typeof data === "string") {
      router.push(`/courses?category=${data}&sortby=${router.query.sortby}`);
      setCategory(data);
      setCurrentPage(1);
    } else {
      setCurrentPage(data);
    }
  }

  const onIncresive = () => {
    currentPage === maxPage.length
      ? setCurrentPage(currentPage)
      : setCurrentPage(currentPage + 1);
  };

  const onDecresive = () => {
    currentPage === 1 ? setCurrentPage(1) : setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <NextSeo
        title="코드유니콘 | 인기순 전체 강의"
        description="프론트엔드, 백엔드, 게임 개발 등 다양한 카테고리의 인기 전체 강의"
        openGraph={{
          type: "website",
          locale: "ko_KR",
          url: "https://codeunicorn.kr/courses?category=all&sortby=popular",
          title: "코드유니콘 | 인기순 전체 강의",
          description:
            "프론트엔드, 백엔드, 게임 개발 등 다양한 카테고리의 인기 전체 강의",
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
      />
      <CoursesTemplate
        courses={coursesByCategory}
        totalCourses={totalCourses}
        category={category}
        currentPage={currentPage}
        maxPage={maxPage}
        onSelect={onSelect}
        onIncresive={onIncresive}
        onDecresive={onDecresive}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { data: courses },
  } = await axios.get(
    `https://api.codeunicorn.kr/courses?category=all&sortby=popular&page=1`,
  );

  return {
    props: { courses },
    revalidate: 86400,
  };
};

export default Courses;

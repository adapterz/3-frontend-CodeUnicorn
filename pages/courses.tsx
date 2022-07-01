import CoursesTemplate from "@/components/courses/CoursesTemplate";
import axios from "axios";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Courses = () => {
  const router = useRouter();
  const [category, setCategory] = useState(router.query.category || "all");
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState([]);
  const [courses, setCourses] = useState([]);
  const [totalCourses, setTotalCourses] = useState(null);

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await axios.get(
        `https://api.codeunicorn.kr/courses?category=${category}&sortby=${router.query.sortby}&page=${currentPage}`,
      );
      setCourses(data.courses);
      setTotalCourses(data.courseCount);
    })();
  }, [category, router.query.sortby, currentPage]);

  // 자동 페이지 버튼 생성을 위한 로직
  useEffect(() => {
    let pageArr = [];
    for (let i = 1; i <= Math.ceil(totalCourses / 9); i++) {
      pageArr.push(i);
    }
    setMaxPage(pageArr);
  }, [courses]);

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
      />
      <CoursesTemplate
        courses={courses}
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

export default Courses;

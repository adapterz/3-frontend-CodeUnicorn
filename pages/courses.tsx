import CoursesTemplate from "@/components/courses/CoursesTemplate";
import axios from "axios";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

const Courses = () => {
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/courses?category=${category}&page=${currentPage}`,
      );
      setCourses(data.courses);
    })();
  }, [category, currentPage]);

  useEffect(() => {
    let pageArr = [];
    for (let i = 1; i <= Math.ceil(courses.length / 9); i++) {
      pageArr.push(i);
    }
    setMaxPage(pageArr);
  }, [courses]);

  function onSelect(data: string | number) {
    typeof data === "string" ? setCategory(data) : setCurrentPage(data);
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
        title="전체 강의"
        description="프론트엔드, 백엔드, 게임 개발 등 다양한 카테고리의 전체 강의"
      ></NextSeo>
      <CoursesTemplate
        courses={courses}
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

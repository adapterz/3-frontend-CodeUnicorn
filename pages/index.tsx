import Banner from "@/components/home/Banner";
import Contents from "@/components/home/Contents";
import Recomend from "@/components/home/Recomend";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("all");
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState([]);
  const [categoryCourses, setCategoryCourses] = useState([]);
  const [backCourses, setBackCourses] = useState([]);
  const [recomendCourses, setRecomendCourses] = useState([]);

  function onSelect(category: string) {
    setCategory(category);
  }

  // TODO 전체 강의 불러오는 데이터 생기면 수정
  // 전체 강의 데이터
  useEffect(() => {
    (async () => {
      const {
        data: {
          data: { courses },
        },
      } = await axios.get(
        `https://api.codeunicorn.kr/courses?category=all&page=1`,
      );
      setCourses(courses);
      setNewCourse(courses.slice(-1)[0]);
    })();
  }, []);

  // 카테고리별 강의 데이터
  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await axios.get(
        `https://api.codeunicorn.kr/courses?category=${category}&page=1`,
      );
      setCategoryCourses(data.courses.splice(0, 4));
    })();
  }, [category]);

  // 백엔드 강의 데이터
  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await axios.get(
        `https://api.codeunicorn.kr/courses?category=backend&page=1`,
      );
      setBackCourses(data.courses);
    })();
  }, [category]);

  // TODO 추후에 가장 많은 유저가 본 top3 데이터 API로 받기
  // 인기 있는 강의를 가져오는 로직
  useEffect(() => {
    let temp = [];
    for (let i = 1; i <= 3; i++) {
      (async () => {
        const response = await axios.get(
          `https://api.codeunicorn.kr/courses/${i}`,
        );
        temp.push(response.data.data);
      })();
      setRecomendCourses(temp);
    }
  }, []);

  return (
    <>
      <Banner newCourse={newCourse} />
      <Contents
        courses={courses}
        category={category}
        backCourses={backCourses}
        categoryCourses={categoryCourses}
        onSelect={onSelect}
      />
      <Recomend recomendCourses={recomendCourses} />
    </>
  );
}

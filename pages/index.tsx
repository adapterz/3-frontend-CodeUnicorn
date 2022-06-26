import Banner from "@/components/home/Banner";
import Contents from "@/components/home/Contents";
import Custom from "@/components/home/Custom";
import Recomend from "@/components/home/Recomend";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState([]);
  const [backCourses, setBackCourses] = useState([]);
  const [recomendCourses, setRecomendCourses] = useState([]);

  // 전체 강의 데이터
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://api.codeunicorn.kr/courses/all`,
      );
      setCourses(data.courses);
      setNewCourse(data.courses.slice(-1)[0]);
    })();
  }, []);

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
  }, []);

  // TODO 추후에 가장 많은 유저가 본 top3 데이터 API로 받기
  // 인기 있는 강의를 가져오는 로직
  useEffect(() => {
    let temp = [];
    for (let i = 1; i <= 5; i++) {
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
      <Contents courses={courses} backCourses={backCourses} />
      <Custom />
      <Recomend recomendCourses={recomendCourses} />
    </>
  );
}

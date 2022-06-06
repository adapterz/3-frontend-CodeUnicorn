import CoursesTemplate from "@/components/courses/CoursesTemplate";
import axios from "axios";
import usePromise from "hooks/usePromise";
import { useState } from "react";

// 더미 데이터
const courses = [
  {
    id: 1,
    title: "처음 만난 리액트(React)",
    catagory: "프론트엔드",
    image:
      "https://cdn.inflearn.com/public/courses/328866/cover/174035a3-ca6b-48cd-b122-c88df540cb04/처음_만난_리액트_v2_cover_inflearn.png",
    totalUsers: 362,
    rating: 4.9,
    ratingsRate: 214,
  },
  {
    id: 2,
    title: "쉽고 빠른 스타일링 Tailwind CSS 기초 가이드",
    catagory: "프론트엔드",
    image:
      "https://cdn.inflearn.com/public/courses/328858/cover/8047d606-8a88-4a3e-a2a8-62934d146031/썸네일_Sass.png",
    totalUsers: 122,
    rating: 4.9,
    ratingsRate: 205,
  },
  {
    id: 3,
    title: "DOM 기본: 튼튼한 기본 만들기",
    catagory: "프론트엔드",
    image:
      "https://cdn.inflearn.com/public/courses/328118/cover/591c315e-b376-4486-9638-89577482ad6f/328118-eng.png",
    totalUsers: 96,
    rating: 4.8,
    ratingsRate: 85,
  },
  {
    id: 4,
    title: "파이널 코딩 테스트: 프론트엔드",
    catagory: "프론트엔드",
    image:
      "https://cdn.inflearn.com/public/courses/327329/cover/943ff50a-01dc-4573-b19b-b90b01c3890b/썸네일_파코테.png",
    totalUsers: 87,
    rating: 4.5,
    ratingsRate: 64,
  },
  {
    id: 5,
    title: "모든 개발자의 실무를 위한 올인원 기본기 클래스",
    catagory: "프론트엔드",
    image:
      "https://cdn.inflearn.com/public/courses/327997/cover/6d8192c6-8a28-40c3-b8df-ef5bff5cb9ac/327997-eng.png",
    totalUsers: 87,
    rating: 4.5,
    ratingsRate: 64,
  },
  {
    id: 6,
    title: "제대로 파는 HTML & CSS - by 얄코",
    catagory: "프론트엔드",
    image:
      "https://cdn.inflearn.com/public/courses/328592/cover/515f3c37-aa1c-496f-8fe9-44d3bcb5e5c2/html-css-inflearn 복사.png",
    totalUsers: 87,
    rating: 4.5,
    ratingsRate: 64,
  },
  {
    id: 7,
    title: "자바스크립트 제대로 배워볼래?",
    catagory: "프론트엔드",
    image:
      "https://cdn.inflearn.com/public/courses/326778/cover/fa701aa5-8e85-4c60-8bd0-32be8a67635b/3A9329DD-8AC3-44FA-AEAA-F981219DC5E2.png",
    totalUsers: 87,
    rating: 4.5,
    ratingsRate: 64,
  },
  {
    id: 8,
    title: "Slack 클론 코딩[실시간 채팅 with React]",
    catagory: "프론트엔드",
    image:
      "https://cdn.inflearn.com/public/courses/326673/cover/e430860b-4ad4-4b01-b4c7-64dccfc64b3a",
    totalUsers: 87,
    rating: 4.5,
    ratingsRate: 64,
  },
  {
    id: 9,
    title: "타입스크립트 입문 - 기초부터 실전까지",
    catagory: "프론트엔드",
    image:
      "https://cdn.inflearn.com/public/courses/326082/cover/c6519e92-f334-46ac-8a31-6290db19b32a",
    totalUsers: 87,
    rating: 4.5,
    ratingsRate: 64,
  },
];

const Courses = () => {
  const [category, setCategory] = useState("전체");
  const [page, setPage] = useState(1);

  function onSelect(data: string | number) {
    typeof data === "string" ? setCategory(data) : setPage(data);
  }

  const onIncresive = () => {
    setPage(page + 1);
  };
  const onDecresive = () => {
    setPage(page - 1);
  };

  // HTTP GET API(카테고리) 예시 로직
  // const [loading, resolved, error] = usePromise(() => {
  //   return axios.get(`https://courses?category=${category}&page=${page}`);
  //    setCourses(resolved);
  // }, [category, page]);

  return (
    <CoursesTemplate
      courses={courses}
      category={category}
      page={page}
      onSelect={onSelect}
      onIncresive={onIncresive}
      onDecresive={onDecresive}
    />
  );
};

export default Courses;

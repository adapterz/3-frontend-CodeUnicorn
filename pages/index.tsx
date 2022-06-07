import Banner from "@/components/home/Banner";
import Contents from "@/components/home/Contents";
import Recomend from "@/components/home/Recomend";
import { useState } from "react";

// 더미 데이터
const frontData = [
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
];

// 더미 데이터
const backData = [
  {
    id: 5,
    title: "실무에서 전달하는 따끈한 MSA 이야기",
    catagory: "백엔드",
    image:
      "https://cdn.inflearn.com/public/courses/328412/cover/d2a23b53-0525-4220-aa70-db86e6a1df50/328412-eng.png",
    totalUsers: 362,
    rating: 4.9,
    ratingsRate: 124,
  },
  {
    id: 6,
    title: "예제로 배우는 핵심 Spring Batch",
    catagory: "백엔드",
    image:
      "https://cdn.inflearn.com/public/courses/328680/cover/11f45144-5848-4365-8de8-d8054dbebddd/대지 1.png",
    totalUsers: 122,
    rating: 4.9,
    ratingsRate: 205,
  },
  {
    id: 7,
    title: "백엔드 프레임워크 만들기",
    catagory: "백엔드",
    image:
      "https://cdn.inflearn.com/public/courses/327598/cover/feec6bfd-abaa-4972-9c88-7dd13ed57c32/327598-eng.png",
    totalUsers: 96,
    rating: 4.8,
    ratingsRate: 85,
  },
  {
    id: 8,
    title: "[하루10분|Web-App] 생애최초 웹프레임워크 Ruby on Rails",
    catagory: "백엔드",
    image:
      "https://cdn.inflearn.com/public/courses/327534/cover/33cd6f1f-38f5-431d-826e-6f46141c5dc3/327534-eng.jpg",
    totalUsers: 87,
    rating: 4.5,
    ratingsRate: 64,
  },
];

// 더미 데이터
const mobileData = [
  {
    id: 9,
    title: "Flutter 앱 개발 완성",
    catagory: "모바일",
    image:
      "https://cdn.inflearn.com/public/courses/328842/cover/c833baeb-5d5d-4e08-832c-4ecc9e90a1bc/cover.png",
    totalUsers: 362,
    rating: 4.9,
    ratingsRate: 124,
  },
  {
    id: 10,
    title: "배달앱 클론코딩[with React Native]",
    catagory: "모바일",
    image:
      "https://cdn.inflearn.com/public/courses/328411/cover/b51a3e0d-e2b3-49b3-8f7c-7677fb920434/328411-eng.png",
    totalUsers: 122,
    rating: 4.9,
    ratingsRate: 205,
  },
  {
    id: 11,
    title: "개발하는 정대리 스위프트 기초 문법",
    catagory: "모바일",
    image:
      "https://cdn.inflearn.com/public/courses/328001/cover/e11c6e6a-14c6-494a-954d-5fc625eb89a6/328001-eng.png",
    totalUsers: 96,
    rating: 4.8,
    ratingsRate: 85,
  },
  {
    id: 12,
    title: "모던 안드로이드 - Jetpack Compose 입문",
    catagory: "모바일",
    image:
      "https://cdn.inflearn.com/public/courses/327890/cover/767897fa-36b3-4b8a-a4aa-2355ec4b5602/327890-eng.png",
    totalUsers: 87,
    rating: 4.5,
    ratingsRate: 64,
  },
];

// 더미 데이터
const recomendCourse = {
  id: 1,
  title: "쉽고 빠르게 끝내는 GO언어 프로그래밍 핵심 기초 입문 과정",
  catagory: "프로그래밍 언어",
  instructor: "MJ코딩",
  description:
    "구글 서버, Docker, 우버등이 Go언어를 활용한 대표 프로젝트이고 최근에는 데이터 분석 및 블록체인에서도 많이 활용하고 있어 Go언어의 인기는 계속해서 수직 상승할 것으로 예상됩니다. 쉽고 빠르게 끝내는 GO 언어 프로그래밍 핵심 기초 입문 과정",
  image: "https://cdn.inflearn.com/wp-content/uploads/golang.jpg",
  totalUsers: 362,
  rating: 4.9,
  ratingsRate: 214,
};

// 더미 데이터
const banner = {
  name: "모의해킹 실무자가 알려주는, SQL Injection 고급 공격 기법",
  description:
    "해킹의 기본 공격의 핵심 원리를 넘어서 테크니컬한 고급 공격 기법에 대한 강의입니다.",
  image:
    "https://cdn.inflearn.com/public/course-326041-cover/a20d39f8-54f7-4b35-976e-86b9e272819c",
};

export default function Home() {
  const [category, setCategory] = useState("전체");
  function onSelect(category: string) {
    setCategory(category);
  }
  return (
    <>
      <Banner banner={banner} />
      <Contents
        frontData={frontData}
        backData={backData}
        mobileData={mobileData}
        category={category}
        onSelect={onSelect}
      />
      <Recomend recomendCourse={recomendCourse} />
    </>
  );
}

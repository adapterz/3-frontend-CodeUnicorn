import styled from "styled-components";
import Course from "@/components/Course";
import Catagoryes from "../Catagoryes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Container = styled.main`
  margin-bottom: 50px;
`;

const Section = styled.section`
  position: relative;
  margin-top: 80px;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-left: 36px;
    margin-bottom: 20px;
  }

  .show__more {
    color: #4e4e4e;
    font-size: 20px;
    position: absolute;
    top: 4px;
    right: 47px;
  }

  .left__arrow {
    font-size: 50px;
    color: #4e4e4e;
    opacity: 0.5;
    left: 10px;
    top: 125px;
    position: absolute;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .right__arrow {
    font-size: 50px;
    color: #4e4e4e;
    opacity: 0.5;
    right: 16px;
    top: 125px;
    position: absolute;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const CourseList = styled.div`
  display: flex;
  justify-content: space-around;
`;

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

function Contents() {
  return (
    <Container>
      <Section>
        <h1>프론트엔드 강의</h1>
        {/* TODO 링크 추가 예정 */}
        <Link href="#">
          <a>
            <span className="show__more">더보기 &gt;</span>
          </a>
        </Link>
        <CourseList>
          {frontData.map((coures) => (
            <Course
              key={coures.id}
              title={coures.title}
              catagory={coures.catagory}
              image={coures.image}
              totalUsers={coures.totalUsers}
              rating={coures.rating}
              ratingsRate={coures.ratingsRate}
            />
          ))}
        </CourseList>
      </Section>
      <Section>
        <h1>백엔드 강의</h1>
        <CourseList>
          <FontAwesomeIcon icon={faCircleChevronLeft} className="left__arrow" />
          {backData.map((coures) => (
            <Course
              key={coures.id}
              title={coures.title}
              catagory={coures.catagory}
              image={coures.image}
              totalUsers={coures.totalUsers}
              rating={coures.rating}
              ratingsRate={coures.ratingsRate}
            />
          ))}
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="right__arrow"
          />
        </CourseList>
      </Section>
      <Section>
        <h1>맞춤 강의</h1>
        <Catagoryes />
        <CourseList>
          {mobileData.map((coures) => (
            <Course
              key={coures.id}
              title={coures.title}
              catagory={coures.catagory}
              image={coures.image}
              totalUsers={coures.totalUsers}
              rating={coures.rating}
              ratingsRate={coures.ratingsRate}
            />
          ))}
        </CourseList>
      </Section>
    </Container>
  );
}

export default Contents;

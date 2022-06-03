import styled from "styled-components";
import Course from "@/components/Course";
import Catagoryes from "../Catagoryes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { ICategoryItem } from "@/interface/category";

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

function Contents({ frontData, backData, mobileData }) {
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
          {frontData.map((coures: ICategoryItem) => (
            <Course key={coures.id} coures={coures} />
          ))}
        </CourseList>
      </Section>
      <Section>
        <h1>백엔드 강의</h1>
        <CourseList>
          <FontAwesomeIcon icon={faCircleChevronLeft} className="left__arrow" />
          {backData.map((coures: ICategoryItem) => (
            <Course key={coures.id} coures={coures} />
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
          {mobileData.map((coures: ICategoryItem) => (
            <Course key={coures.id} coures={coures} />
          ))}
        </CourseList>
      </Section>
    </Container>
  );
}

export default Contents;

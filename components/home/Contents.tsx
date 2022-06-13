import styled from "styled-components";
import Course from "@/components/Course";
import Catagories from "../Catagories";
import Link from "next/link";
import { ICategoryItem } from "@/interface/category";
import Slider from "../Slider";

const Container = styled.main`
  margin: 0px auto;
  width: 1200px;
  margin-bottom: 50px;
`;

const Section = styled.section`
  position: relative;
  margin-top: 80px;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .show__more {
    color: #4e4e4e;
    font-size: 20px;
    position: absolute;
    top: 4px;
    right: 1.125rem;
  }

  .right__arrow {
    right: -5px !important;
  }
`;

const CourseList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function Contents({ frontData, backData, mobileData, category, onSelect }) {
  return (
    <Container>
      <Section>
        <h1>프론트엔드 강의</h1>
        <Link href="/courses">
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
        <Slider courses={backData} width="1200px" />
      </Section>
      <Section>
        <h1>맞춤 강의</h1>
        <Catagories category={category} onSelect={onSelect} />
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

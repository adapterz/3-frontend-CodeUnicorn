import { ICourseProps } from "@/interface/course";
import styled from "styled-components";

const Container = styled.div`
  width: 850px;
  margin: 0px auto;
  margin-bottom: 60px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const InfoBox = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

const ImageBox = styled.div`
  text-align: center;
  margin-right: 20px;
  img {
    width: 150px;
    height: 150px;
  }
  .name {
    font-size: 18px;
    font-weight: 500;
  }
`;

const Info = styled.p`
  font-size: 14px;
  line-height: 1.6;
  font-weight: 400;
  color: #333333;
`;

function Introduction({ course, instructor }: ICourseProps) {
  return (
    <Container>
      <h1>리더 소개</h1>
      <InfoBox>
        <ImageBox>
          <img src={instructor.image}></img>
          <span className="name">{instructor.name}</span>
        </ImageBox>
        <Info>{instructor.introduction}</Info>
      </InfoBox>
      <h1>교육 소개</h1>
      <Info>{course.description}</Info>
    </Container>
  );
}

export default Introduction;
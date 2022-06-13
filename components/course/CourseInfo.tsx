import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { MdPerson, MdPlayArrow, MdOutlineAccessTime } from "react-icons/md";
import { ICourseProps } from "@/interface/course";
import Link from "next/link";
import { useRouter } from "next/router";

const Container = styled.div`
  width: 850px;
  margin: 0px auto;
  margin-top: 4rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid #333333;
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;

  .image {
    border-radius: 20px;
    width: 500px;
    height: 300px;
  }
`;

const ImageBox = styled.div`
  position: relative;
  cursor: pointer;
  opacity: 0.9;
  img {
    z-index: 1;
    &:hover {
      opacity: 1;
    }
  }

  svg {
    border: 2px solid white;
    border-radius: 50%;
    position: absolute;
    font-size: 8rem;
    color: white;
    left: 35%;
    top: 30%;
    opacity: 0.9;
    z-index: 2;
  }
  &:hover {
    opacity: 1;
  }
`;

const RightBox = styled.div`
  margin: 0px auto;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btn = styled.button`
  color: white;
  font-size: 1rem;
  padding: 4px 0px;
  width: 220px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

const LikeBtn = styled(Btn)`
  background-color: #ff8e3d;
`;

const LearnBtn = styled(Btn)`
  background-color: #4100ca;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  h3 {
    margin: 10px 0px;
    font-size: 1.125rem;
    font-weight: 500;
  }

  .totalUsers {
    margin-left: 2px;
    margin-top: 4px;
    color: #444444;
    font-weight: 500;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  svg {
    font-size: 20px;
  }

  span {
    margin-left: 4px;
    padding-top: 2px;
  }

  .star {
    color: #ffeb34;
  }
`;

const BottomBox = styled.div`
  margin-top: 30px;
`;

const Category = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0px;
  margin-bottom: 30px;
`;

function CourseInfo({ course, instructor }: ICourseProps) {
  const { query } = useRouter();
  return (
    <Container>
      <TopBox>
        <Link href={`/courses/${query.courseId}/lectures/1`}>
          <a>
            <ImageBox>
              <MdPlayArrow />
              <img className="image" src={course.image} />
            </ImageBox>
          </a>
        </Link>
        <RightBox>
          <BtnBox>
            <LikeBtn>관심 교육 등록</LikeBtn>
            <Link href={`/courses/${query.courseId}/lectures/1`}>
              <a>
                <LearnBtn>바로 학습하기</LearnBtn>
              </a>
            </Link>
          </BtnBox>
          <InfoBox>
            <h3>교육정보</h3>
            <Info>
              <AiFillStar className="star" />
              <span>
                ({course.rating})&nbsp;{course.ratingsRate}개의 수강평
              </span>
            </Info>
            <Info>
              <MdPerson className="person"></MdPerson>
              <span>{instructor.name}</span>
            </Info>
            <Info>
              <MdOutlineAccessTime />
              <span>총 12개 교육(5시간20분)</span>
            </Info>
            <span className="totalUsers">
              현재 {course.totalUsers}명이 수강하고 있습니다.
            </span>
          </InfoBox>
        </RightBox>
      </TopBox>
      <BottomBox>
        <Category>{course.category}</Category>
        <Title>{course.title}</Title>
      </BottomBox>
    </Container>
  );
}

export default CourseInfo;

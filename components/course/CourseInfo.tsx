import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { MdPerson, MdPlayArrow, MdOutlineAccessTime } from "react-icons/md";
import { CourseTypes } from "@/interface/course";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

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
`;

const ImageBox = styled.div`
  position: relative;
  cursor: pointer;
  opacity: 0.9;
  border: 1px solid gray;
  border-radius: 20px;
  min-width: 500px;
  max-width: 500px;
  min-height: 301px;
  max-height: 301px;

  span {
    border-radius: 20px;
  }

  &:hover {
    opacity: 1;
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
  background-color: #53b175;
`;

const CancelBtn = styled(Btn)`
  background-color: #ff8e3d;
`;

const LearnBtn = styled(Btn)`
  background-color: #4100ca;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  min-height: 140px;

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
  min-height: 20px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0px;
  margin-bottom: 30px;
  min-height: 25px;
`;

type CourseInfoProps = {
  courseDetail: CourseTypes;
  onLike: () => void;
};

// TODO typeScript 적용 해야함(props)
function CourseInfo({
  courseDetail,
  instructor,
  initLecture,
  lectureCount,
  onBegin,
  isLike,
  onLike,
  onCancle,
}) {
  const { query } = useRouter();
  return (
    <Container>
      {courseDetail && (
        <>
          <TopBox>
            <Link href={`/courses/${query.courseId}/lectures/${initLecture}`}>
              <a>
                <ImageBox>
                  <MdPlayArrow />
                  <Image
                    src={courseDetail.imagePath}
                    width={500}
                    height={300}
                  />
                </ImageBox>
              </a>
            </Link>
            <RightBox>
              <BtnBox>
                {isLike ? (
                  <CancelBtn onClick={onCancle}>관심 교육 취소</CancelBtn>
                ) : (
                  <LikeBtn onClick={onLike}>관심 교육 등록</LikeBtn>
                )}
                <Link
                  href={`/courses/${query.courseId}/lectures/${initLecture}`}
                >
                  <a>
                    <LearnBtn onClick={onBegin}>바로 학습하기</LearnBtn>
                  </a>
                </Link>
              </BtnBox>
              <InfoBox>
                <h3>교육정보</h3>
                <Info>
                  <AiFillStar className="star" />
                  <span>
                    ({courseDetail.averageRatings})&nbsp;
                    {courseDetail.ratingsCount}
                    개의 수강평
                  </span>
                </Info>
                <Info>
                  <MdPerson className="person"></MdPerson>
                  <span>{instructor.name}</span>
                </Info>
                <Info>
                  <MdOutlineAccessTime />
                  <span>
                    총 {lectureCount}개 교육({courseDetail.totalHours})
                  </span>
                </Info>
                <span className="totalUsers">
                  현재 {courseDetail.userCount}명이 수강하고 있습니다.
                </span>
              </InfoBox>
            </RightBox>
          </TopBox>
          <BottomBox>
            <Category>{courseDetail.category}</Category>
            <Title>{courseDetail.name}</Title>
          </BottomBox>
        </>
      )}
    </Container>
  );
}

export default CourseInfo;

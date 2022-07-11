import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { MdPerson, MdPlayArrow, MdOutlineAccessTime } from "react-icons/md";
import { CourseTypes } from "@/interface/course";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { InstructorTypes } from "@/interface/Instructor";

const Container = styled.div`
  width: 1040px;
  margin: 0px auto;
  margin-top: 90px;
  margin-bottom: 50px;
  border-bottom: 1px solid #333333;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 100%;
  }
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px 0px;
    margin: 0px auto;
  }
`;

const ImageBox = styled.div`
  position: relative;
  cursor: pointer;
  opacity: 0.9;
  border: 1px solid gray;
  border-radius: 20px;
  max-width: 669px;
  max-height: 415px;

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
    width: 160px;
    height: 160px;
    color: white;
    margin: 128px 256px;
    opacity: 0.8;
    z-index: 2;

    @media screen and (min-width: 0px) and (max-width: 412px) {
      margin: 10% 30%;
    }
  }
  &:hover {
    opacity: 1;
  }
`;

const RightBox = styled.div`
  @media screen and (min-width: 0px) and (max-width: 412px) {
    text-align: center;
  }
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    margin-bottom: 20px;
  }
`;

const Btn = styled.button`
  color: white;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  width: 260px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 14px;
  padding-bottom: 2px;

  &:hover {
    opacity: 0.8;
  }
`;

const LikeBtn = styled(Btn)`
  background-color: #f87b22;
`;

const CancelBtn = styled(Btn)`
  background-color: #e71313;
`;

const LearnBtn = styled(Btn)`
  background-color: #4100ca;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0px;
  min-height: 140px;
  h3 {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;
  }

  .totalUsers {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  @media screen and (min-width: 0px) and (max-width: 412px) {
    align-items: center;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  svg {
    font-size: 20px;
  }

  span {
    margin-left: 10px;
  }

  .heart {
    color: #e9361b;
  }

  .stduy-icon {
    margin-left: 2px;
  }
`;

const BottomBox = styled.div`
  margin-top: 30px;
`;

const Category = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 50px;
  min-height: 25px;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    text-align: center;
  }
`;

type CourseInfoProps = {
  courseDetail: CourseTypes;
  instructor: InstructorTypes;
  initLecture: number;
  lectureCount: number;
  isLike: boolean;
  onBegin: () => void;
  onLike: () => void;
  onCancle: () => void;
};

function CourseInfo({
  courseDetail,
  instructor,
  initLecture,
  lectureCount,
  onBegin,
  isLike,
  onLike,
  onCancle,
}: CourseInfoProps) {
  const { query } = useRouter();
  return (
    <Container>
      {courseDetail && (
        <>
          <TopBox>
            <ImageBox>
              <Link href={`/courses/${query.courseId}/lectures/${initLecture}`}>
                <a>
                  <MdPlayArrow />
                  <Image
                    src={courseDetail.imagePath}
                    width={670}
                    height={415}
                  />
                </a>
              </Link>
            </ImageBox>
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
                <h3>교육정보.</h3>
                <Info>
                  <AiFillHeart className="heart" />
                  <span>
                    {courseDetail.likeCount}
                    개의 좋아요
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
                <Info>
                  <svg
                    className="stduy-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.78099 12.75H1V14.9992H8.00006V14.9681C8.00006 13.7434 7.00629 12.75 5.78099 12.75Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.2191 12.75H15V14.9992H8V14.9681C8 13.7434 8.9934 12.75 10.2191 12.75Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.1472 9.65121L4.49985 10.7256L5.57425 8.07824L7.99969 5.65276C7.99969 5.24815 7.99969 5.00035 7.99969 5.00035C7.99969 3.77467 7.00629 2.78125 5.78062 2.78125H1V12.7491H5.78099C7.00666 12.7491 8.00006 13.7425 8.00006 14.9682V12.4621C8.00006 12.4621 8.00006 10.6409 8.00006 8.79797L7.1472 9.65121Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.2191 2.78125C8.9934 2.78125 8 3.77466 8 5.00034C8 5.00034 8 5.24777 8 5.65275L10.8715 2.78125H10.2191Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.0166 2.78125L13.6202 3.17773L8 8.79832C8 10.6413 8 12.4624 8 12.4624V14.9685C8 13.7428 8.9934 12.7494 10.2191 12.7494H15V2.78125H14.0166Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.6207 3.17791L12.0476 1.60547L5.57286 8.07749L7.14597 9.64994L13.6207 3.17791Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.5744 8.0791L4.5 10.7265L7.14735 9.65206L5.5744 8.0791Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.2266 2.5721L12.6538 1L12.0481 1.60542L13.6209 3.17752L14.2266 2.5721Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.6207 3.17791L12.0476 1.60547L5.57286 8.07749L7.14597 9.64994L13.6207 3.17791Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.5744 8.0791L4.5 10.7265L7.14735 9.65206L5.5744 8.0791Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.2266 2.5721L12.6538 1L12.0481 1.60542L13.6209 3.17752L14.2266 2.5721Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="totalUsers">
                    현재 {courseDetail.userCount}명이 수강하고 있습니다.
                  </span>
                </Info>
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

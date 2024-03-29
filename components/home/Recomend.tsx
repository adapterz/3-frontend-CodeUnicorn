import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CourseTypes } from "@/interface/course";
import Loading from "../Loading";
import Images from "next/image";

const Container = styled.div`
  margin: 0px auto;
  width: 100%;
  min-height: 550px;
  max-height: 550px;
  background-color: #193a91;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  margin-bottom: 50px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    display: none;
  }

  .heart {
    font-size: 18px;
    margin-right: 6px;
    color: #e9361b;
  }

  .userIcon {
    opacity: 0.8;
    margin-right: 6px;
  }

  .left__arrow {
    font-size: 50px;
    color: whitesmoke;
    opacity: 0.7;
    left: 1%;
    top: 45%;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    &:hover {
      opacity: 0.9;
    }
  }
  .right__arrow {
    font-size: 50px;
    color: whitesmoke;
    opacity: 0.7;
    right: 2%;
    top: 45%;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const TitleBox = styled.div`
  width: 1040px;
  margin: 0px auto;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 100%;
  }

  h1 {
    width: 300px;
    color: whitesmoke;
    font-size: 28px;
    font-weight: bold;
    margin: 25px 0px;

    @media screen and (min-width: 1600px) and (max-width: 3500px) {
      margin-right: 900px;
    }
  }
`;

const SliderContainer = styled.div`
  padding-left: 200px;
  display: flex;
  width: 1440px;
  margin: 0px auto;
`;

const CourseBox = styled.div`
  min-width: 1440px;
  display: flex;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 100%;
  }
`;

const ImageBox = styled.div`
  min-width: 640px;
  max-width: 640px;
  min-height: 400px;
  max-height: 400px;
  border-radius: 20px;

  img {
    width: 640px;
    height: 400px;
    border-radius: 20px;
  }
`;

const InfoBox = styled.div`
  min-width: 320px;
  max-width: 320px;
  min-height: 100%;
  margin-left: 50px;
`;

const Catagory = styled.h4`
  color: whitesmoke;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  color: whitesmoke;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  margin-bottom: 10px;
`;

const Instructor = styled.h3`
  color: whitesmoke;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Rating = styled.p`
  display: flex;
  align-items: center;
  color: whitesmoke;
  margin-bottom: 30px;
`;

const Description = styled.p`
  color: whitesmoke;
  min-width: 320px;
  max-width: 320px;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  word-break: keep-all;
`;

type RecommendProps = {
  recommendCourses: CourseTypes[];
};

function Recomend({ recommendCourses }: RecommendProps) {
  const TOTAL_SLIDES = recommendCourses.length - 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    currentSlide >= TOTAL_SLIDES
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };
  const backSlide = () => {
    currentSlide === 0
      ? setCurrentSlide(TOTAL_SLIDES)
      : setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <Container>
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        onClick={backSlide}
        className="left__arrow"
      />
      <TitleBox>
        <h1>Code Unicorn 추천 교육</h1>
      </TitleBox>
      <SliderContainer ref={slideRef}>
        {recommendCourses.length === 0 ? (
          <Loading />
        ) : (
          recommendCourses.map((course: CourseTypes) => (
            <CourseBox key={course.name}>
              <ImageBox>
                <Link key={course.id} href={`/courses/${course.id}`}>
                  <a>
                    <Images
                      title={course.name}
                      src={course.imagePath}
                      alt={course.name}
                      width={640}
                      height={400}
                    />
                  </a>
                </Link>
              </ImageBox>
              <Link key={course.id} href={`/courses/${course.id}`}>
                <a>
                  <InfoBox>
                    <Catagory>{course.category}</Catagory>
                    <Title>{course.name}</Title>
                    <Instructor>
                      <FontAwesomeIcon className="userIcon" icon={faUserTie} />
                      {course.instructor.name}
                    </Instructor>
                    <Rating>
                      <AiFillHeart className="heart" />
                      {course.likeCount}
                    </Rating>
                    <Description>{course.description}</Description>
                  </InfoBox>
                </a>
              </Link>
            </CourseBox>
          ))
        )}
      </SliderContainer>
      <FontAwesomeIcon
        icon={faCircleChevronRight}
        onClick={nextSlide}
        className="right__arrow"
      />
    </Container>
  );
}

export default Recomend;

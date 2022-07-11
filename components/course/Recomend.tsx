import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CourseTypes } from "@/interface/course";
import Loading from "@/components/Loading";
import Course from "@/components/Course";

const Container = styled.div`
  width: 1200px;
  margin: 0px auto;
  position: relative;
  padding-left: 40px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    display: none;
  }

  .left__arrow {
    font-size: 50px;
    color: #4e4e4e;
    opacity: 0.5;
    left: 70px;
    top: 120px;
    position: absolute;
    cursor: pointer;
    z-index: 9999;

    &:hover {
      opacity: 0.8;
    }
  }

  .right__arrow {
    font-size: 50px;
    color: #4e4e4e;
    opacity: 0.5;
    right: 55px;
    top: 120px;
    position: absolute;
    cursor: pointer;
    z-index: 9999;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const InnerContainer = styled.div`
  width: 1040px;
  margin: 0px auto;
  margin-top: 4rem;
  margin-bottom: 3rem;
  overflow: hidden;
  min-height: 340px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SliderContainer = styled.div`
  /* width: 900px; */
  width: 1040px;
  display: flex;

  a {
    width: 348px;
  }
`;

function Recomend({ recommendCourses }) {
  const TOTAL_SLIDES = 2;
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);

  const nextSlide = () => {
    currentSlide >= TOTAL_SLIDES
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };
  const backSlide = () => {
    currentSlide === 0 ? setCurrentSlide(5) : setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%`;
  }, [currentSlide]);

  return (
    <Container>
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        onClick={backSlide}
        className="left__arrow"
      />
      <InnerContainer>
        <Title>추천 교육</Title>
        <SliderContainer ref={slideRef}>
          {recommendCourses.length === 0 ? (
            <Loading />
          ) : (
            recommendCourses.map((course: CourseTypes) => (
              <Course
                key={course.id}
                course={course}
                width={320}
                height={200}
              />
            ))
          )}
        </SliderContainer>
      </InnerContainer>
      <FontAwesomeIcon
        icon={faCircleChevronRight}
        onClick={nextSlide}
        className="right__arrow"
      />
    </Container>
  );
}

export default Recomend;

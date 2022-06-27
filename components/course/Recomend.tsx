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
`;

const InnerContainer = styled.div`
  width: 900px;
  margin: 0px auto;
  margin-top: 4rem;
  margin-bottom: 3rem;
  overflow: hidden;
  min-height: 340px;
  display: flex;
  flex-direction: column;

  .left__arrow {
    font-size: 50px;
    color: #4e4e4e;
    opacity: 0.5;
    left: 148px;
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
    right: 125px;
    top: 120px;
    position: absolute;
    cursor: pointer;
    z-index: 9999;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SliderContainer = styled.div`
  width: 900px;
  display: flex;

  a {
    width: 300px;
  }
`;

function Recomend({ recomendCourses }) {
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
    // slideRef.current.style.transform = `translateX(-${currentSlide}0%`;
    slideRef.current.style.transform = `translateX(-${currentSlide}00%`;
  }, [currentSlide]);

  return (
    <Container>
      <InnerContainer>
        <Title>추천 교육</Title>
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          onClick={backSlide}
          className="left__arrow"
        />
        <SliderContainer ref={slideRef}>
          {recomendCourses.length === 0 ? (
            <Loading />
          ) : (
            recomendCourses.map((course: CourseTypes) => (
              <Course key={course.id} course={course} />
            ))
          )}
        </SliderContainer>
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          onClick={nextSlide}
          className="right__arrow"
        />
      </InnerContainer>
    </Container>
  );
}

export default Recomend;

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Course from "./Course";
import { CourseTypes } from "@/interface/course";
import Loading from "./Loading";

interface IContainer {
  width: string;
}

const Container = styled.div<IContainer>`
  max-width: ${(props) => props.width};
  margin: 0px auto;
  overflow: hidden;
  display: flex;
  margin-bottom: 32px;

  .left__arrow {
    font-size: 50px;
    color: #4e4e4e;
    opacity: 0.5;
    left: -25px;
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
    top: 120px;
    right: -25px;
    position: absolute;
    cursor: pointer;
    z-index: 9999;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const SliderContainer = styled.div`
  display: flex;
  gap: 40px;
  height: 300px;
  position: relative;
  padding-right: 40px;
`;

function Slider({ courses, width }) {
  const TOTAL_SLIDES = 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    currentSlide >= TOTAL_SLIDES
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 5);
  };
  const backSlide = () => {
    currentSlide === 0 ? setCurrentSlide(5) : setCurrentSlide(currentSlide - 5);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}0%`;
  }, [currentSlide]);

  return (
    <Container width={width}>
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        onClick={backSlide}
        className="left__arrow"
      />
      <SliderContainer ref={slideRef}>
        {courses.length === 0 ? (
          <Loading />
        ) : (
          courses.map((course: CourseTypes) => (
            <Course key={course.id} course={course} width={280} height={200} />
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

export default Slider;

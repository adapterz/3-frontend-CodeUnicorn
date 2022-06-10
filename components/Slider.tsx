import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Course from "./Course";
import { ICourse } from "@/interface/course";

interface IContainer {
  width: string;
}

const Container = styled.div<IContainer>`
  width: ${(props) => props.width};
  margin: 0px auto;
  overflow: hidden;

  .left__arrow {
    font-size: 50px;
    color: #4e4e4e;
    opacity: 0.5;
    left: -25px;
    top: 125px;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    &:hover {
      opacity: 0.8;
    }
  }
  .right__arrow {
    font-size: 50px;
    color: #4e4e4e;
    opacity: 0.5;
    right: -57px;
    top: 125px;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const SliderContainer = styled.div`
  margin: 0 auto;
  display: flex;
`;

function Slider({ courses, width }) {
  const TOTAL_SLIDES = 2;
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
    <Container width={width}>
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        onClick={backSlide}
        className="left__arrow"
      />
      <SliderContainer ref={slideRef}>
        {courses.map((coures: ICourse) => (
          <Course key={coures.id} coures={coures} />
        ))}
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

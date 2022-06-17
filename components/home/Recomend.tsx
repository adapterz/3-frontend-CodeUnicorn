import styled from "styled-components";
import { IRecomend } from "@/interface/recomend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faStar,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CourseTypes } from "@/interface/course";

const Container = styled.div`
  margin: 0px auto;
  background-color: #193a91;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  h1 {
    color: whitesmoke;
    font-size: 28px;
    font-weight: bold;
    margin: 25px 0px;
    margin-left: 42px;
  }

  .star {
    font-size: 18px;
    color: #ffff4a;
    margin-right: 4px;
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

const SliderContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
`;

const CourseBox = styled.div`
  width: 1500px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 40px;
  position: relative;
`;

const ImageBox = styled.div`
  width: 60%;
  margin-left: 40px;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 20px;
`;

const InfoBox = styled.div`
  width: 40%;
  margin-left: 50px;
`;

const Catagory = styled.h4`
  color: whitesmoke;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  width: 86%;
  color: whitesmoke;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Instructor = styled.h3`
  color: whitesmoke;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Rating = styled.p`
  color: whitesmoke;
  margin-bottom: 30px;
`;

const Description = styled.p`
  color: whitesmoke;
  width: 86%;
  font-size: 20px;
  line-height: 1.4;
`;

type RecomendProps = {
  recomendCourses: CourseTypes[];
};

function Recomend({ recomendCourses }: RecomendProps) {
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
    <Container>
      <FontAwesomeIcon
        icon={faCircleChevronLeft}
        onClick={backSlide}
        className="left__arrow"
      />
      <h1>Code Unicorn 추천 교육</h1>
      <SliderContainer ref={slideRef}>
        {recomendCourses.map((course: CourseTypes) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <a>
              <CourseBox>
                <ImageBox>
                  <Image src={course.imagePath} />
                </ImageBox>
                <InfoBox>
                  <Catagory>{course.category}</Catagory>
                  <Title>{course.name}</Title>
                  <Instructor>
                    <FontAwesomeIcon className="userIcon" icon={faUserTie} />
                    {course.instructor.name}
                  </Instructor>
                  <Rating>
                    <FontAwesomeIcon className="star" icon={faStar} />
                    {course.averageRatings} ({course.ratingsCount})
                  </Rating>
                  <Description>{course.description}</Description>
                </InfoBox>
              </CourseBox>
            </a>
          </Link>
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

export default Recomend;

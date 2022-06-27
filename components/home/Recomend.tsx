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
import Loading from "../Loading";
import Images from "next/image";

const Container = styled.div`
  margin: 0px auto;
  width: 100%;
  min-height: 520px;
  max-height: 520px;
  background-color: #193a91;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  .spinner-border {
    margin-top: 10rem;
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

const TitleBox = styled.div`
  width: 1200px;
  margin: 0px auto;

  h1 {
    color: whitesmoke;
    font-size: 28px;
    font-weight: bold;
    margin: 25px 0px;
  }
`;

const SliderContainer = styled.div`
  min-width: 1500px;
  max-width: 1500px;
  display: flex;
  margin-left: 150px;

  @media only screen and (min-width: 1520px) and (max-width: 3500px) {
    min-width: 1200px;
    max-width: 1200px;
    margin-left: 0px;
    margin: 0px auto;
  }
`;

const CourseBox = styled.div`
  min-width: 1500px;
  max-width: 1500px;
  display: flex;

  @media only screen and (min-width: 1520px) and (max-width: 3500px) {
    min-width: 1200px;
    max-width: 1200px;
    padding-right: 100px;
  }
`;

const ImageBox = styled.div`
  min-width: 850px;
  min-height: 400px;
  max-width: 850px;
  max-height: 400px;
  border-radius: 20px;

  img {
    width: 850px;
    height: 400px;
    border-radius: 20px;
  }
`;

const InfoBox = styled.div`
  min-width: 300px;
  max-width: 300px;
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
  min-width: 280px;
  max-width: 280px;
  min-height: 100px;
  font-size: 20px;
  line-height: 1.4;
`;

type RecomendProps = {
  recomendCourses: CourseTypes[];
};

function Recomend({ recomendCourses }: RecomendProps) {
  const TOTAL_SLIDES = recomendCourses.length - 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    currentSlide >= TOTAL_SLIDES
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };
  const backSlide = () => {
    console.log(currentSlide);
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
        {recomendCourses.length === 0 ? (
          <Loading />
        ) : (
          recomendCourses.map((course: CourseTypes) => (
            <CourseBox>
              <ImageBox>
                <Link key={course.id} href={`/courses/${course.id}`}>
                  <a>
                    <Images
                      src={course.imagePath}
                      alt="course"
                      width={850}
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
                      <FontAwesomeIcon className="star" icon={faStar} />
                      {course.averageRatings} ({course.ratingsCount})
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

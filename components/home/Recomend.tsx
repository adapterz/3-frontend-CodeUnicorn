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

const Container = styled.div`
  background-color: #193a91;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
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
  }

  .left__arrow {
    font-size: 50px;
    color: whitesmoke;
    opacity: 0.7;
    left: 1%;
    top: 45%;
    position: absolute;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
  .right__arrow {
    font-size: 50px;
    color: whitesmoke;
    opacity: 0.7;
    right: 1%;
    top: 45%;
    position: absolute;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const CourseBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 40px;
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
`;

function Recomend({
  catagory,
  title,
  instructor,
  description,
  image,
  rating,
  ratingsRate,
}: IRecomend) {
  return (
    <Container>
      <FontAwesomeIcon icon={faCircleChevronLeft} className="left__arrow" />
      <h1>Code Unicorn 추천 교육</h1>
      <Link href="#">
        <a>
          <CourseBox>
            <ImageBox>
              <Image src={image} />
            </ImageBox>
            <InfoBox>
              <Catagory>{catagory}</Catagory>
              <Title>{title}</Title>
              <Instructor>
                <FontAwesomeIcon className="userIcon" icon={faUserTie} />{" "}
                {instructor}
              </Instructor>
              <Rating>
                <FontAwesomeIcon className="star" icon={faStar} />
                {rating} ({ratingsRate})
              </Rating>
              <Description>{description}</Description>
            </InfoBox>
          </CourseBox>
        </a>
      </Link>
      <FontAwesomeIcon icon={faCircleChevronRight} className="right__arrow" />
    </Container>
  );
}

export default Recomend;

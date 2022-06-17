import styled from "styled-components";
import { CourseProps, CourseTypes } from "@/interface/course";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  .star {
    font-size: 18px;
    color: #ffeb34;
    margin-right: 4px;
  }
`;

const Image = styled.img`
  max-width: 280px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid gray;
  &:hover {
    opacity: 0.8;
  }
`;

const Category = styled.span`
  font-size: 18px;
  margin-top: 20px;
  font-weight: 400;
  color: #585656;
  padding: 0px 4px;
`;

const Title = styled.h2`
  margin-top: 6px;
  font-size: 20px;
  color: black;
  font-weight: 600;
  width: 280px;
  padding: 0px 4px;
  line-height: 1.4;
`;

const TotalUser = styled.p`
  font-weight: 400;
  color: #333333;
  opacity: 0.6;
  margin-top: 10px;
  padding: 0px 4px;
`;

const Rating = styled.p`
  font-size: 16px;
  color: #a09e9e;
  margin-top: 6px;
  padding: 0px 4px; ;
`;

function Course({ course }: CourseProps) {
  const {
    id,
    name,
    category,
    imagePath,
    userCount,
    averageRatings,
    ratingsCount,
  }: CourseTypes = course;
  return (
    <Container>
      <Link key={course.id} href={`/courses/${id}`}>
        <a>
          <Image src={imagePath} />
        </a>
      </Link>
      <Category>{category}</Category>
      <Link key={course.name} href={`/courses/${id}`}>
        <a>
          <Title>{name}</Title>
        </a>
      </Link>
      <TotalUser>{userCount}명이 같이 듣고 있습니다.</TotalUser>
      <Rating>
        <FontAwesomeIcon className="star" icon={faStar} />
        {averageRatings} ({ratingsCount})
      </Rating>
    </Container>
  );
}

export default Course;

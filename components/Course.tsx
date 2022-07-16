import styled from "styled-components";
import { CourseTypes } from "@/interface/course";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import Images from "next/image";

const Container = styled.div`
  min-height: 250px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  a {
    img {
      border-radius: 20px;
      border: 1px solid gray !important;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  .heart {
    font-size: 14px;
    margin-right: 5px;
    color: #e9361b;
  }
`;

type ImageLinkProps = {
  width: number;
  height: number;
};

const ImageLink = styled.a<ImageLinkProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
`;

const Category = styled.span`
  font-size: 14px;
  line-height: 16px;
  margin-top: 20px;
  font-weight: 400;
  color: #333333;
`;

const Title = styled.h2`
  margin-top: 5px;
  color: #333333;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  width: 230px;
`;

const TotalUser = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #333333;
  margin-top: 10px;
`;

const Rating = styled.p`
  color: #495057;
  margin-top: 6px;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
`;

type courseProps = {
  course: CourseTypes;
  width: number;
  height: number;
};

function Course({ course, width, height }: courseProps) {
  const { id, name, category, imagePath, userCount, likeCount }: CourseTypes =
    course;
  return (
    <Container>
      <Link key={course.id} href={`/courses/${id}`}>
        <ImageLink width={width} height={height}>
          <Images
            src={imagePath}
            title={name}
            alt={name}
            width={width}
            height={height}
          />
        </ImageLink>
      </Link>
      <Category>{category}</Category>
      <Link key={course.name} href={`/courses/${id}`}>
        <a>
          <Title>{name}</Title>
        </a>
      </Link>
      <TotalUser>{userCount}명이 같이 듣고 있습니다.</TotalUser>
      <Rating>
        <AiFillHeart className="heart" />
        {likeCount}
      </Rating>
    </Container>
  );
}

export default Course;

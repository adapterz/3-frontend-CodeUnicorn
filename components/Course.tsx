import styled from "styled-components";
import { ICourse } from "@/interface/course";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .star {
    font-size: 18px;
    color: #ffeb34;
    margin-right: 4px;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid gray;
`;

const Catagory = styled.span`
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
  width: 300px;
  padding: 0px 4px;
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

function Course({ coures }) {
  const { title, catagory, image, totalUsers, rating, ratingsRate }: ICourse =
    coures;
  return (
    // TODO 추후에 링크 추가
    <Link href="#">
      <a>
        <Container>
          <Image src={image} />
          <Catagory>{catagory}</Catagory>
          <Title>{title}</Title>
          <TotalUser>{totalUsers}명이 같이 듣고 있습니다.</TotalUser>
          <Rating>
            <FontAwesomeIcon className="star" icon={faStar} />
            {rating} ({ratingsRate})
          </Rating>
        </Container>
      </a>
    </Link>
  );
}

export default Course;

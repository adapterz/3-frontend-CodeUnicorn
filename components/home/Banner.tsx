import styled from "styled-components";
import Link from "next/link";
import Loading from "../Loading";
import Images from "next/image";
import { CourseTypes } from "@/interface/course";

const Container = styled.div`
  width: 100%;
  min-height: 420px;
  background-color: #2b3d55;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid gray;
  }
`;

const InnerContainer = styled.div`
  width: 1040px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 20px 0px;
  }

  img {
    border-radius: 20px;
  }
`;

const BannerInfoBox = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  width: 370px;
  font-size: 32px;
  line-height: 38px;
  color: white;
  font-weight: 700;
  line-height: 120%;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    margin-top: 10px;
  }
`;

const Description = styled.p`
  min-width: 415px;
  margin-top: 10px;
  width: 280px;
  color: #8d8a8a;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    margin: 0px auto;
    min-width: 320px;
    margin-top: 10px;
  }
`;

type BannerProps = {
  newCourse: CourseTypes;
};

function Banner({ newCourse }: BannerProps) {
  return (
    <Container>
      {newCourse.length === 0 ? (
        <Loading />
      ) : (
        <InnerContainer>
          <BannerInfoBox>
            <Link href={`/courses/${newCourse.id}`}>
              <a>
                <Title>{newCourse.name}</Title>
                <Description>{newCourse.description}</Description>
              </a>
            </Link>
          </BannerInfoBox>
          <Link href={`/courses/${newCourse.id}`}>
            <a>
              <Images
                loading="eager"
                layout="responsive"
                src={newCourse.imagePath}
                alt="course"
                width={400}
                height={300}
              />
            </a>
          </Link>
        </InnerContainer>
      )}
    </Container>
  );
}

export default Banner;

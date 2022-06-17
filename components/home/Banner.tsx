import styled from "styled-components";
import Link from "next/link";
import { CourseTypes } from "@/interface/course";

const Container = styled.div`
  width: 100%;
  max-height: 420px;
  background-color: #2b3d55;
  display: flex;
`;

const InnerContainer = styled.div`
  margin: 0px auto;
  display: flex;
  align-items: center;
`;

const BannerInfoBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BackImage = styled.img`
  border-radius: 20px;
  width: 80%;
  height: 90%;
`;

const Title = styled.h1`
  width: 320px;
  font-size: 24px;
  color: white;
  font-weight: bold;
  line-height: 120%;
`;

const Description = styled.p`
  margin-top: 10px;
  width: 320px;
  color: #8d8a8a;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
`;

// type BannerProps = {
//   newCourse: CourseTypes;
// };

function Banner({ newCourse }) {
  return (
    <Link href={`/courses/${newCourse.id}`}>
      <a>
        <Container>
          <InnerContainer>
            <BannerInfoBox>
              <Title>{newCourse.name}</Title>
              <Description>{newCourse.description}</Description>
            </BannerInfoBox>
            <BackImage src={newCourse.imagePath} />
          </InnerContainer>
        </Container>
      </a>
    </Link>
  );
}

export default Banner;

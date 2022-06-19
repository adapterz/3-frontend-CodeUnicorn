import styled from "styled-components";
import Link from "next/link";
import Loading from "../Loading";

const Container = styled.div`
  width: 100%;
  min-height: 420px;
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
              <BackImage src={newCourse.imagePath} />
            </a>
          </Link>
        </InnerContainer>
      )}
    </Container>
  );
}

export default Banner;

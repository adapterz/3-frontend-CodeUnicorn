import styled from "styled-components";
import Link from "next/link";
import Loading from "../Loading";
import Images from "next/image";

const Container = styled.div`
  width: 100%;
  min-height: 420px;
  background-color: #2b3d55;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 0px) and (max-width: 400px) {
    width: 1400px;
  }
`;

const InnerContainer = styled.div`
  width: 835px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    border-radius: 20px;
  }
`;

const BannerInfoBox = styled.div`
  min-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 10px;
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
              <Images
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

import styled from "styled-components";
import Link from "next/link";
import Loading from "../Loading";

const Container = styled.header`
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  background-color: #333333;
`;

const ImageBox = styled.div`
  .logo {
    margin-left: 20px;
    width: 120px;
    height: 120px;
  }
`;

const TitleBox = styled.div`
  color: whitesmoke;
  line-height: 1.2;
  margin-left: 30px;
  flex: 1;

  .category {
    font-size: 18px;
    font-weight: 300;
  }

  .title {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;

  .image {
    width: 60px;
    height: 60px;
    margin-bottom: 6px;
  }

  .name {
    color: whitesmoke;
    font-weight: 400;
  }
`;

function Header({ courseDetail }) {
  return (
    <>
      {courseDetail === undefined ? (
        <Loading />
      ) : (
        <Container>
          <Link href="/">
            <a>
              <ImageBox>
                <img className="logo" src="/images/logo.svg" />
              </ImageBox>
            </a>
          </Link>
          <TitleBox>
            <h3 className="category">{courseDetail.category}</h3>
            <h1 className="title">{courseDetail.name}</h1>
          </TitleBox>
          <InfoBox>
            <img className="image" src={courseDetail.instructor.profilePath} />
            <span className="name">{courseDetail.instructor.name}</span>
          </InfoBox>
        </Container>
      )}
    </>
  );
}

export default Header;

import styled from "styled-components";
import { ICourseProps } from "@/interface/course";
import Link from "next/link";

const Container = styled.header`
  width: 100%;
  height: 10%;
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
  }

  .name {
    margin-top: 4px;
    color: whitesmoke;
    font-weight: 400;
  }
`;

function Header({ course }: ICourseProps) {
  return (
    <Container>
      <Link href="/">
        <a>
          <ImageBox>
            <img className="logo" src="/images/logo.svg" />
          </ImageBox>
        </a>
      </Link>
      <TitleBox>
        <h3 className="category">{course.category}</h3>
        <h1 className="title">{course.title}</h1>
      </TitleBox>
      <InfoBox>
        <img className="image" src={course.instructor.image} />
        <span className="name">{course.instructor.name}</span>
      </InfoBox>
    </Container>
  );
}

export default Header;

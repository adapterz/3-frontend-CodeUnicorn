import styled from "styled-components";

const Container = styled.div`
  width: 850px;
  margin: 0px auto;
  margin-bottom: 60px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .copyright {
    margin-top: 40px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

const ImageBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  img {
    width: 160px;
    height: 150px;
  }
  .name {
    min-height: 20px;
    font-size: 18px;
    font-weight: 500;
    margin-top: 10px;
  }
`;

const Info = styled.p`
  min-height: 25px;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 400;
  color: #333333;

  a {
    color: blue;
  }
`;

function Introduction({ courseDetail, instructor }) {
  return (
    <>
      {courseDetail && (
        <Container>
          <h1>리더 소개</h1>
          <InfoBox>
            <ImageBox>
              <img src={instructor.profilePath}></img>
              <span className="name">{instructor.name}</span>
            </ImageBox>
            <Info>{instructor.introduction}</Info>
          </InfoBox>
          <h1>교육 소개</h1>
          <Info>{courseDetail.description}</Info>
          <h1 className="copyright">수업 저작권</h1>
          <img src="/images/copyright.jpeg" />
          <Info>
            이 강의는 CC 라이센스를 따르고 있으며, 아래 링크에서도 볼 수
            있습니다.
            <br />
            <a href="https://opentutorials.org/module/">
              https://opentutorials.org/module/
            </a>
            좋은 지식을 공유해주시는 생활코딩에 감사의 말씀을 전합니다.
          </Info>
        </Container>
      )}
    </>
  );
}

export default Introduction;

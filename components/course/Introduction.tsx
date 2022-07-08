import styled from "styled-components";

const Container = styled.div`
  width: 1040px;
  margin: 0px auto;
  margin-bottom: 60px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 100%;
    text-align: center;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 30px;
  }

  .copyright {
    margin-top: 40px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  margin-bottom: 100px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;
    margin-bottom: 40px;
  }
`;

const ImageBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  img {
    width: 200px;
    height: 200px;
  }
  .name {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    margin-top: 20px;
  }

  @media screen and (min-width: 0px) and (max-width: 412px) {
    margin-right: 0px;
    margin-bottom: 40px;
  }
`;

const Info = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #333333;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    border-bottom: 1px solid gray;
    padding-bottom: 30px;

    &:nth-child(2) {
      border-bottom: 0;
    }
  }

  a {
    color: blue;
  }
`;

function Introduction({ courseDetail, instructor }) {
  return (
    <>
      {courseDetail && (
        <Container>
          <h1>리더소개</h1>
          <InfoBox>
            <ImageBox>
              <img src={instructor.profilePath}></img>
              <span className="name">{instructor.name}</span>
            </ImageBox>
            <Info>{instructor.introduction}</Info>
          </InfoBox>
          <h1>교육소개</h1>
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

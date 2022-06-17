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
    width: 150px;
    height: 110px;
  }
  .name {
    font-size: 18px;
    font-weight: 500;
    margin-top: 10px;
  }
`;

const Info = styled.p`
  font-size: 14px;
  line-height: 1.6;
  font-weight: 400;
  color: #333333;
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
        </Container>
      )}
    </>
  );
}

export default Introduction;

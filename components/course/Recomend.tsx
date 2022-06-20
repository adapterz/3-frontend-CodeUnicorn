import styled from "styled-components";
import Slider from "../Slider";

const Container = styled.div`
  width: 900px;
  margin: 0px auto;
  margin-bottom: 3rem;
`;

const Section = styled.section`
  position: relative;
  margin-top: 50px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

function Recomend({ recomendCourses }) {
  return (
    <Container>
      <Section>
        <h1>추천 교육</h1>
        <Slider courses={recomendCourses} width="900px" />
      </Section>
    </Container>
  );
}

export default Recomend;

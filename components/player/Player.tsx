import styled from "styled-components";
import Curriculum from "./Curriculum";
import VideoInfo from "./VideoInfo";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

function Player({ course, section, lecture }) {
  return (
    <Container>
      <VideoInfo course={course} lecture={lecture} />
      <Curriculum section={section} />
    </Container>
  );
}

export default Player;

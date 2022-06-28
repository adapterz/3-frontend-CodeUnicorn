import styled from "styled-components";
import Curriculum from "./Curriculum";
import VideoInfo from "./VideoInfo";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

function Player({ courseDetail, curriculum, lecture }) {
  return (
    <Container>
      <VideoInfo courseDetail={courseDetail} lecture={lecture} />
      <Curriculum curriculum={curriculum} />
    </Container>
  );
}

export default Player;

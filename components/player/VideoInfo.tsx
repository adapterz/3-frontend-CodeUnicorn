import styled from "styled-components";
import Header from "./Header";
import Video from "./Video";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function VideoInfo({ course, lecture }) {
  return (
    <Container>
      <Header course={course} />
      <Video lecture={lecture} />
    </Container>
  );
}

export default VideoInfo;

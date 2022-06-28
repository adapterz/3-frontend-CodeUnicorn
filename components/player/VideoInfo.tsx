import styled from "styled-components";
import Header from "./Header";
import Video from "./Video";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function VideoInfo({ courseDetail, lecture }) {
  return (
    <Container>
      <Header courseDetail={courseDetail} />
      <Video lecture={lecture} />
    </Container>
  );
}

export default VideoInfo;

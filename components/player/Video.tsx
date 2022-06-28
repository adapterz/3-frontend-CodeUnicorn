import styled from "styled-components";
import Loading from "../Loading";

const Container = styled.div`
  width: 100%;
  height: 88%;
  display: flex;
`;

function Video({ lecture }) {
  console.log(lecture);
  return (
    <Container>
      {lecture.videoUrl === undefined ? (
        <Loading />
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={lecture.videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
    </Container>
  );
}

export default Video;

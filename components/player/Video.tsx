import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90%;
`;

function Video({ lecture }) {
  console.log(lecture);
  return (
    <Container>
      <iframe
        width="100%"
        height="100%"
        src={lecture.videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </Container>
  );
}

export default Video;

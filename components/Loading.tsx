import styled from "styled-components";

const Container = styled.div`
  margin: auto;
`;

const LoadingEvent = styled.span``;

function Loading() {
  return (
    <Container className="spinner-border" role="status">
      <LoadingEvent className="sr-only">Loading...</LoadingEvent>
    </Container>
  );
}

export default Loading;

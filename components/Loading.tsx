import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  height: 150px;
  display: flex;
  align-items: center;
`;

const LoadingBox = styled.div`
  margin: auto;
`;

const LoadingEvent = styled.span``;

const InfoMessage = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-top: 60px;
`;

function Loading() {
  const [isData, setIsData] = useState(true);
  setTimeout(() => {
    setIsData(false);
  }, 3000);

  return (
    <Container>
      {isData === true ? (
        <LoadingBox className="spinner-border" role="status">
          <LoadingEvent className="sr-only">Loading...</LoadingEvent>
        </LoadingBox>
      ) : (
        <InfoMessage>데이터가 존재하지 않습니다.</InfoMessage>
      )}
    </Container>
  );
}

export default Loading;

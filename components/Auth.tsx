import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 72vh;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

const BackBtn = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px;
  border: 1px solid gray;
  border-radius: 6px;
`;

const Auth: React.FC = () => {
  return (
    <Container>
      <Title>접근 권한이 없는 페이지 입니다.</Title>
      <Link href="/">
        <a>
          <BackBtn>Home 화면</BackBtn>
        </a>
      </Link>
    </Container>
  );
};

export default Auth;

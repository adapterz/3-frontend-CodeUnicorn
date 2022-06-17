import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMessage, ToastType } from "slices/toast";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 72vh;

  h2 {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setMessage({ message: "로그인 후 접근할 수 있습니다." } as ToastType),
    );
  }, []);
  return (
    <Container>
      <Title>로그인 후 이용할 수 있는 서비스 입니다.</Title>
      <h2>로그인 or 회원가입 화면으로 이동하시겠습니까?</h2>
      <Link href="/login">
        <a>
          <BackBtn>Login 화면</BackBtn>
        </a>
      </Link>
    </Container>
  );
};

export default Auth;

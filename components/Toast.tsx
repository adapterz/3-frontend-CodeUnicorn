import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ToastReducerType } from "slices";
import { setMessage, ToastType } from "slices/toast";

interface IMessage {
  action: number;
  show?: number;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const MessageBox = styled.div<IMessage>`
  position: fixed;
  bottom: 12rem;
  text-align: center;
  height: 50px;
  background-color: #818080;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.action};
  transition: 1.2s opacity ease-in;
  z-index: 3;
`;

const Title = styled.span`
  font-size: 20px;
  color: white;
  padding: 0px 20px;
`;

const Toast: React.FC = () => {
  const [show, setShow] = useState(false);
  const { toast } = useSelector<ToastReducerType, ToastType>((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (toast.message !== "") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        dispatch(setMessage({ message: "" } as ToastType));
      }, 3000);
    }
  }, [toast.message]);
  return (
    <Container>
      <MessageBox action={show === true ? 1 : 0}>
        <Title>{toast.message}</Title>
      </MessageBox>
    </Container>
  );
};

export default Toast;

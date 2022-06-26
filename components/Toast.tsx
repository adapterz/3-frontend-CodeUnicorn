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
  bottom: 11rem;
  text-align: center;
  height: 50px;
  background-color: #818080;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.action};
  transition: 1s opacity ease-in;
  z-index: 9999;
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
      }, 3000);
      setTimeout(() => {
        dispatch(setMessage({ message: "" } as ToastType));
      }, 4000);
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

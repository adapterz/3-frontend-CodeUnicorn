import { useEffect, useState } from "react";
import styled from "styled-components";

interface IMessage {
  action: number;
}

const MessageBox = styled.div<IMessage>`
  position: fixed;
  left: 45%;
  bottom: 12rem;
  text-align: center;
  height: 50px;
  background-color: #818080;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.action};
  transition: 1.5s opacity ease-in;
`;

const Title = styled.span`
  font-size: 20px;
  color: white;
  padding: 0px 20px;
`;

export function Toast({ message, action }) {
  const [opacity, setOpacity] = useState(action);
  useEffect(() => {
    setTimeout(() => {
      setOpacity(0);
    }, 3000);
  }, []);
  return (
    <MessageBox action={opacity}>
      <Title>{message}</Title>
    </MessageBox>
  );
}

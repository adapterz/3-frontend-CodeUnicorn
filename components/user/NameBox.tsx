import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 14px;
`;

const Input = styled.input`
  font-size: 1rem;
  width: 220px;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`;

type nameBoxProps = {
  currentName: string;
};

function NameBox({ currentName }: nameBoxProps) {
  const [newName, setNewName] = useState(currentName);

  const onChange = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    setNewName(currentTarget.value);
  };

  return (
    <Container>
      <Title>닉네임</Title>
      <Input
        id="input-name"
        type="text"
        placeholder={currentName}
        minLength={2}
        maxLength={8}
        onChange={onChange}
      />
    </Container>
  );
}

export default NameBox;

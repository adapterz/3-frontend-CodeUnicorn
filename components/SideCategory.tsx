import styled from "styled-components";
import React from "react";

const Container = styled.div`
  width: 120px;
  margin-bottom: 1.125rem;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 6px;
  border-bottom: 2px solid #444444;
  margin-bottom: 6px;
  cursor: pointer;
  color: ${(props) => props.color};
`;

const OptionList = styled.ul``;

const Option = styled.li`
  font-size: 14px;
  color: #888888;
  padding: 6px 0px;
  cursor: pointer;
  &:first-child {
    font-weight: bold;
  }
`;

type SideCategoryProps = {
  title: string;
  options: string[];
  active: boolean;
};

const SideCategory: React.FC<SideCategoryProps> = ({
  title,
  options,
  active,
}) => {
  return (
    <Container>
      <Title color={active && "#4819ad"}>{title}</Title>
      <OptionList>
        {options.map((option) => (
          <Option>{option}</Option>
        ))}
      </OptionList>
    </Container>
  );
};

export default SideCategory;

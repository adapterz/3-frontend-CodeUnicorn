import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { AuthReducerType } from "slices";
import { IAuth } from "slices/auth";
import { useRouter } from "next/router";

const Container = styled.div`
  width: 120px;
  margin-bottom: 1.125rem;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: 2px solid #333333;
  margin-bottom: 10px;
  cursor: pointer;
  color: ${(props) => props.color};
`;

const OptionList = styled.ul``;

const Option = styled.li`
  font-size: 14px;
  color: ${(props) => props.color};
  line-height: 16px;
  padding: 6px 0px;
  font-weight: 500;
  cursor: pointer;
`;

type SideCategoryProps = {
  title: string;
  options: { key: string; name: string }[];
  active: boolean;
};

const SideCategory: React.FC<SideCategoryProps> = ({
  title,
  options,
  active,
}) => {
  const {
    auth: { userId },
  } = useSelector<AuthReducerType, IAuth>((state) => state);

  const { query } = useRouter();

  return (
    <Container>
      <Title color={active && "#4819ad"}>{title}</Title>
      <OptionList>
        {options.map((option) => (
          <Link href={`/users/${userId}?option=${option.key}`}>
            <a>
              <Option color={query.option === option.key ? "black" : "#888888"}>
                {option.name}
              </Option>
            </a>
          </Link>
        ))}
      </OptionList>
    </Container>
  );
};

export default SideCategory;

import { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { ISort } from "@/interface/sort";

const sorts = [{ name: "인기순" }, { name: "최신순" }];

const Container = styled.div`
  display: flex;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-right: 0.6rem;
`;

const Sort = styled.div<ISort>`
  font-size: 15px;
  cursor: pointer;
  color: #c4c4c4;
  margin-right: 0.6rem;
  padding-top: 1.4px;
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      color: #333333;
    `}
  &:nth-child(3) {
    margin: 0;
  }
`;

function Sorts() {
  const [sort, setSort] = useState("인기순");
  const onSelect = useCallback((sort: string) => {
    setSort(sort);
  }, []);
  return (
    <Container>
      <Title>정렬기준</Title>
      {sorts.map((s) => (
        <Sort
          key={s.name}
          active={s.name === sort}
          onClick={() => onSelect(s.name)}
        >
          {s.name}
        </Sort>
      ))}
    </Container>
  );
}

export default Sorts;

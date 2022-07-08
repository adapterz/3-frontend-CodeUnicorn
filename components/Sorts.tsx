import { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { ISort } from "@/interface/sort";
import { useRouter } from "next/router";

const sorts = [{ name: "인기순" }, { name: "최신순" }];

const Container = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin-right: 15px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

const Sort = styled.div<ISort>`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  color: #c4c4c4;
  margin-right: 10px;
  ${(props) =>
    props.active &&
    css`
      color: #333333;
    `}
  &:nth-child(3) {
    margin: 0;
  }
`;

function Sorts() {
  const router = useRouter();
  const [sort, setSort] = useState("인기순");
  const onSelect = useCallback((sort: string) => {
    setSort(sort);
    router.push(
      `/courses?category=${router.query.category}&sortby=${
        sort === "인기순" ? "popular" : "new"
      }`,
    );
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

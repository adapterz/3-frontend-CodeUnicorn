import { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { ICategory } from "@/interface/category";

const categories = [
  { name: "전체" },
  { name: "프론트엔드" },
  { name: "백엔드" },
  { name: "모바일" },
  { name: "프로그래밍 언어" },
  { name: "알고리즘" },
  { name: "게임 개발" },
];

const Container = styled.div``;

const Catagory = styled.button<ICategory>`
  padding: 5px 20px;
  border: 1px solid gray;
  border-radius: 20px;
  margin: 0px 6px;
  color: black;
  background-color: white;
  ${(props) =>
    props.active &&
    css`
      color: white;
      background-color: #193a90;
    `}
`;

function Catagories({ category, onSelect }) {
  return (
    <Container>
      {categories.map((c) => (
        <Catagory
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.name}
        </Catagory>
      ))}
    </Container>
  );
}

export default Catagories;

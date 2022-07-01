import styled, { css } from "styled-components";
import { ICategory } from "@/interface/category";

export const categories = [
  { key: "all", name: "전체" },
  { key: "frontend", name: "프론트엔드" },
  { key: "backend", name: "백엔드" },
  { key: "mobile", name: "모바일" },
  { key: "language", name: "프로그래밍 언어" },
  { key: "algorithm", name: "알고리즘" },
  { key: "database", name: "데이터베이스" },
];

const Container = styled.div``;

const Catagory = styled.button<ICategory>`
  font-size: 15px;
  padding: 6px 20px;
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
          key={c.key}
          active={category === c.key}
          onClick={() => onSelect(c.key)}
        >
          {c.name}
        </Catagory>
      ))}
    </Container>
  );
}

export default Catagories;

import styled, { css } from "styled-components";
import { ICategory } from "@/interface/category";

export const categories = [
  { key: "all", name: "전체보기" },
  { key: "frontend", name: "프론트엔드" },
  { key: "backend", name: "백엔드" },
  { key: "database", name: "데이터베이스" },
  { key: "algorithm", name: "알고리즘" },
  { key: "language", name: "프로그래밍 언어" },
  { key: "mobile", name: "모바일" },
];

const Container = styled.div`
  width: 1040px;
  margin: 0px auto;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    width: 100%;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px 0px;
  }
`;

const Catagory = styled.button<ICategory>`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  padding: 0px 20px;
  border: 1px solid gray;
  border-radius: 20px;
  margin-right: 10px;
  color: black;
  background-color: white;
  height: 29px;

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

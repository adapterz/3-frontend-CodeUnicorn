import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-left: 36px;
  margin-bottom: 20px;
`;

const Catagory = styled.button`
  padding: 5px 20px;
  border: 1px solid gray;
  border-radius: 20px;
  margin: 0px 6px;
  color: black;
  background-color: white;
`;

function Catagoryes() {
  const [currentClick, setCurrentClick] = useState("3");
  const [prevClick, setPrevClick] = useState("");
  // 선택한 카테고리 색 지정 로직
  useEffect(() => {
    if (currentClick !== "") {
      const current = document.getElementById(currentClick);
      current.style.color = "white";
      current.style.backgroundColor = "#193A90";
    }
    if (prevClick !== "") {
      const current = document.getElementById(prevClick);
      current.style.color = "black";
      current.style.backgroundColor = "white";
    }
    setPrevClick(currentClick);
  }, [currentClick]);
  const onClick = ({ target }) => {
    setCurrentClick(target.id);
  };
  return (
    <Container>
      <Catagory id="1" onClick={onClick}>
        프론트엔드
      </Catagory>
      <Catagory id="2" onClick={onClick}>
        백엔드
      </Catagory>
      <Catagory id="3" onClick={onClick}>
        모바일
      </Catagory>
      <Catagory id="4" onClick={onClick}>
        프로그래밍 언어
      </Catagory>
      <Catagory id="5" onClick={onClick}>
        알고리즘
      </Catagory>
    </Container>
  );
}

export default Catagoryes;

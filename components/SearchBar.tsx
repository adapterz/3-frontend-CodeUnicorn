import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";
import { CourseTypes } from "@/interface/course";
import { useRouter } from "next/router";
import React from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 66px;

  @media screen and (min-width: 0px) and (max-width: 412px) {
    display: none;
  }
`;

const Input = styled.input`
  width: 285px;
  border: 0;
  border-radius: 6px;
  border: 1px solid gray;
  margin-right: 8px;
  padding-left: 10px;

  &::placeholder {
    font-size: 14px;
  }
`;

const BtnBox = styled.div`
  border: 1px solid gray;
  border-radius: 6px;
  padding: 2px 6px;
  &:hover {
    background-color: gray;
  }

  svg {
    cursor: pointer;
    font-size: 16px;
    padding-bottom: 1px;
  }
`;

type SearchProps = {
  courses: CourseTypes[];
};

function SearchBar({ courses }: SearchProps) {
  const router = useRouter();

  const onClick = () => {
    const input: HTMLInputElement = document.querySelector(".search-input");
    if (input.value === "") {
      router.push("/search?keyword=all");
    } else {
      router.push(`/search?keyword=${input.value}`);
    }
  };

  const onEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <Container>
      <Input
        className="search-input"
        list="courses"
        placeholder="강의를 검색해주세요."
        onKeyPress={onEnter}
      />
      <BtnBox>
        <HiOutlineSearch onClick={onClick} />
      </BtnBox>
      {courses && (
        <datalist id="courses">
          {courses.map((course: CourseTypes) => (
            <option key={course.name} value={course.name}></option>
          ))}
        </datalist>
      )}
    </Container>
  );
}

export default SearchBar;

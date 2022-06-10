import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { HiUserCircle } from "react-icons/hi";

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid gray;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const Nav = styled.nav``;

const Menu = styled.span`
  font-size: 18px;
  color: black;
  cursor: pointer;
`;

const LoginBtn = styled.button`
  width: 80px;
  height: 30px;
  font-size: 18px;
  font-weight: 500;
  margin-left: 20px;
  border: 0;
  color: white;
  background-color: #5314db;
  border-radius: 20px;
  cursor: pointer;
`;

const IsLoginedNav = styled.nav`
  svg {
    font-size: 2.4rem;
    color: #4819ad;
    cursor: pointer;
  }
`;

function Header() {
  const [isLogined, setLogined] = useState(true);
  return (
    <Container>
      <Link href="/">
        <a>
          <Logo src="/images/logo.svg"></Logo>
        </a>
      </Link>
      {isLogined === false ? (
        <Nav>
          <Link href="/courses">
            <a>
              <Menu>강의</Menu>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <LoginBtn>로그인</LoginBtn>
            </a>
          </Link>
        </Nav>
      ) : (
        <IsLoginedNav>
          {/* TODO 유저의 아이디를 얻는 방법? */}
          <Link href="/users/2">
            <a>
              <HiUserCircle />
            </a>
          </Link>
        </IsLoginedNav>
      )}
    </Container>
  );
}

export default Header;

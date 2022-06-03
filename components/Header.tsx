import Link from "next/link";
import styled from "styled-components";

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

function Header() {
  return (
    <Container>
      <Link href="/">
        <a>
          <Logo src="/images/logo.svg"></Logo>
        </a>
      </Link>
      <Nav>
        {/* TODO 추후에 링크 추가 */}
        <Link href="#">
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
    </Container>
  );
}

export default Header;

import Link from "next/link";
import styled from "styled-components";
import { HiUserCircle } from "react-icons/hi";
import { useSelector } from "react-redux";
import { IAuth } from "slices/auth";
import { AuthReducerType } from "slices";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";
import axios, { AxiosResponse } from "axios";
import logout from "@/core/api/logout";

const Container = styled.nav`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid gray;
`;

const InnerContainer = styled.div`
  width: 1400px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  padding-top: 2px;
  font-size: 18px;
  font-weight: 500;
  margin-left: 20px;
  border: 0;
  color: white;
  background-color: #5314db;
  border-radius: 20px;
  cursor: pointer;
`;

const LogOutBtn = styled.button`
  text-align: center;
  width: 80px;
  height: 30px;
  font-size: 16px;
  padding-top: 2px;
  font-weight: 500;
  margin-left: 20px;
  margin-bottom: 3px;
  border: 0;
  color: white;
  background-color: #5314db;
  border-radius: 20px;
  cursor: pointer;
`;

const IsLoginedNav = styled.nav`
  display: flex;
  align-items: center;
  svg {
    font-size: 2.4rem;
    color: #444444;
    cursor: pointer;
  }

  .isLogined-lecture {
    margin-right: 20px;
  }
`;

function Header() {
  const router = useRouter();
  const cookie = new Cookies();
  const {
    auth: { userId },
  } = useSelector<AuthReducerType, IAuth>((state) => state);

  const onLogOut = async () => {

    const response = await logout(cookie.get("SESSION"))

    console.log(response);

    if(response.status === 204) {
      cookie.remove("SESSION", {
        domain: "codeunicorn.kr",
        path: "/",
      });
      signOut();
    }
  };

  return (
    <Container>
      <InnerContainer>
        <Link href="/">
          <a>
            <Logo src="/images/logo.svg"></Logo>
          </a>
        </Link>
        {cookie.get("SESSION") !== undefined ? (
          <IsLoginedNav>
            <Link href="/courses?category=all">
              <a>
                <Menu className="isLogined-lecture">전체 강의</Menu>
              </a>
            </Link>
            {router.asPath === `/users/${userId}` ? (
              <Link href={`/users/${userId}`}>
                <a>
                  <HiUserCircle />
                </a>
              </Link>
            ) : (
              <Link href={`/users/${userId}`}>
                <a>
                  <HiUserCircle />
                </a>
              </Link>
            )}
            <LogOutBtn onClick={onLogOut}>로그아웃</LogOutBtn>
          </IsLoginedNav>
        ) : (
          <Nav>
            <Link href="/courses?category=all">
              <a>
                <Menu>전체 강의</Menu>
              </a>
            </Link>
            <Link href="/login">
              <a>
                <LoginBtn>로그인</LoginBtn>
              </a>
            </Link>
          </Nav>
        )}
      </InnerContainer>
    </Container>
  );
}

export default Header;

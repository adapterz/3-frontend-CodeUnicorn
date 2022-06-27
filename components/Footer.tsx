import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.footer`
  min-width: 1200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  background-color: #f4f4f4;
`;

const Notice = styled.div`
  a {
    font-size: 16px;
    opacity: 0.6;
    margin: 0px 20px;
  }
  margin-top: 10px;
  margin-bottom: 30px;
`;

const SnsList = styled.div`
  margin-bottom: 30px;
  display: flex;
  width: 160px;
  justify-content: space-between;

  svg {
    color: white;
    font-size: 18px;
    border-radius: 50%;
    background-color: #c4c4c4;
    padding: 6px 6px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const SiteInfo = styled.div`
  opacity: 0.6;
  margin-bottom: 10px;
  line-height: 140%;
  margin-bottom: 20px;
`;

const Law = styled.div``;

function Footer() {
  return (
    <Container>
      <Notice>
        <Link href="/terms-of-service">
          <a>이용약관</a>
        </Link>
        <Link href="/privacy">
          <a>이용약관 개인정보</a>
        </Link>
        <Link href="">
          <a>고객센터</a>
        </Link>
      </Notice>
      <SnsList>
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </SnsList>
      <SiteInfo>
        대표 : 코드유니콘
        <br />
        고객센터 : 02-XXXX-XXXX | 사업자 번호 XXX-XX-XXXXX
        <br />
        통신판매업 제 2022-서울관악-XXXX 호<br />
        주소 : 서울특별시 XX구 XX로 1층 코드유니콘
      </SiteInfo>
      <Law>@CodeUnicorn. ALL RIGHTS RESERVED</Law>
    </Container>
  );
}

export default Footer;

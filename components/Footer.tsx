import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/Fa";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 270px;
  background-color: #f4f4f4;
`;

const Notice = styled.div`
  span {
    font-size: 16px;
    opacity: 0.6;
    margin: 0px 20px;
  }
  margin-top: 10px;
  margin-bottom: 30px;
`;

const SnsList = styled.div`
  margin-bottom: 30px;

  .icon {
    color: white;
    font-size: 1.125rem;
    padding: 8px 10px;
    border-radius: 50%;
    background-color: #c4c4c4;
    margin: 0px 8px;
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
        <span>이용약관</span> <span>개인정보</span> <span>처리방침</span>
        <span>환불 정책</span> <span>고객센터</span>
      </Notice>
      <SnsList>
        <FaFacebookF className="icon" />
        <FaInstagram className="icon" />
        <FaTwitter className="icon" />
        <FaYoutube className="icon" />
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

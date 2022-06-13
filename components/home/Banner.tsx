import styled from "styled-components";
import { IBannder } from "@/interface/banner";
import Link from "next/link";

const Container = styled.div`
  height: 400px;
  border-bottom: 1px solid gray;
  position: relative;
  background-color: #2b3d55;
  display: flex;
`;

const BannerInfoBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BackImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  width: 300px;
  font-size: 24px;
  color: white;
  font-weight: bold;
  line-height: 120%;
`;

const Description = styled.p`
  margin-top: 10px;
  width: 300px;
  color: #8d8a8a;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
`;

function Banner({ banner }) {
  const { name, description, image }: IBannder = banner;
  return (
    // TODO 추후에 링크 추가
    <Link href="#">
      <a>
        <Container>
          <BannerInfoBox>
            <Title>{name}</Title>
            <Description>{description}</Description>
          </BannerInfoBox>
          <BackImage src={image} />
        </Container>
      </a>
    </Link>
  );
}

export default Banner;

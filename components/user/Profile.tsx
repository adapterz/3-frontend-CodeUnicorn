import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { loginUser } from "slices/auth";
import { setMessage } from "slices/toast";
import styled from "styled-components";
import NameBox from "@/components/user/NameBox";

type ContainerType = {
  display: string;
};

const Container = styled.div<ContainerType>`
  min-width: 800px;
  margin-top: 60px;
  margin-left: 78px;
  margin-bottom: 100px;
  min-height: 850px;
  display: ${(props) => props.display};
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  border-bottom: 1px solid darkgray;
  padding-bottom: 6px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.label`
  margin: 0px auto;
  margin-top: 50px;

  img {
    width: 200px;
    height: 160px;
    border-radius: 50%;
    cursor: pointer;
  }

  input {
    width: 200px;
    height: 200px;
  }
`;

type SaveBtnProps = {
  cursor: string;
};

const SaveBtn = styled.button<SaveBtnProps>`
  margin: 40px 0px;
  margin-bottom: 80px;
  width: 100%;
  height: 40px;
  background-color: #b3b1b1;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  cursor: ${(props) => props.cursor} !important;

  &:hover {
    opacity: 0.8;
  }
`;

const AgreeInfoBox = styled.div`
  margin-top: 25px;

  h2 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    padding: 0px 4px;
    line-height: 1.4;
  }
`;

const AgreeBox = styled.div`
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-weight: 700;
  }

  input {
    width: 100%;
    margin-top: 12px;
    border: 0;
    background-color: lightgray;
    padding: 6px;
    border-radius: 6px;
    &:focus {
      outline: none;
    }
  }
`;

const RemoveBtn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin-top: 30px;
  border: 1px solid lightgray;
  font-size: 1rem;
  color: gray;
`;

type ProfileProps = {
  userId: number;
  currentName: string;
  image: string;
  active: boolean;
};

const Profile = ({ userId, currentName, image, active }: ProfileProps) => {
  const [currentImage, setCurrentImage] = useState(image);
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState();
  const [cursor, setCursor] = useState("pointer");
  const dispatch = useDispatch();

  const onChange = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    setNewName(currentTarget.value);
  };

  // 초기 이미지 세팅
  useEffect(() => {
    setCurrentImage(image);
  }, [image]);

  // 닉네임 or 이미지 둘다 없으면 버튼 클릭 제한
  useEffect(() => {
    newName === "" && newImage === undefined
      ? setCursor("not-allowed")
      : setCursor("pointer");
  }, [newName, newImage]);

  // 이미지 파일 추가시 미리보기
  const addFile = useCallback(({ target }) => {
    let reader = new FileReader();
    reader.onload = () => {
      setCurrentImage(reader.result as string);
      setNewImage(target.files[0]);
    };
    reader.readAsDataURL(target.files[0]);
  }, []);

  // 유저 정보 저장 클릭 이벤트
  const onSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newName = document.getElementById("input-name") as HTMLInputElement;

    const cookie = new Cookies();
    const formArr = new FormData();

    formArr.append("image", newImage);
    formArr.append("nickname", newName.value);

    const response = await axios.post("/api/upload", formArr, {
      headers: {
        cookies: cookie.get("SESSION"),
      },
    });

    if (response.status === 200) {
      const input = document.querySelector("#input-name") as HTMLInputElement;
      input.value = "";
      dispatch(
        loginUser({
          isLogined: true,
          userId: userId,
          userName: response.data.data.nickname,
          image: response.data.data.profilePath,
        }),
      );
      setCurrentImage(response.data.data.profilePath);
      dispatch(
        setMessage({ message: "프로필 정보가 성공적으로 변경되었습니다." }),
      );
    } else {
      dispatch(setMessage({ message: "프로필 정보 변경에 실패했습니다." }));
    }
  };

  return (
    <Container display={active ? "block" : "none"}>
      <Title>내정보</Title>
      <InfoBox>
        <ImageBox htmlFor="input-file">
          <form
            id="info-form"
            method="post"
            onSubmit={onSave}
            encType="multipart/form-data"
          >
            <img src={currentImage} />
            <input
              type="file"
              id="input-file"
              accept=".jpg, .jpeg, .png"
              style={{ display: "none" }}
              onChange={addFile}
            />
          </form>
        </ImageBox>
        <NameBox currentName={currentName} onChange={onChange} />
        <SaveBtn type="submit" form="info-form" cursor={cursor}>
          저장
        </SaveBtn>
      </InfoBox>
      <Title>회원탈퇴</Title>
      <AgreeInfoBox>
        <h2>탈퇴하지말고 우리 함께 해요.</h2>
        <p>
          1. 회원이 작성한 콘텐츠는 자동으로 삭제되지 않으며 만일 삭제를
          원하시면 탈퇴하시기전에 삭제를 하셔야합니다.
          <br /> 2.탈퇴 후 동일한 메일로 재가입이 가능하지만 탈퇴한 계정과
          동일한 별명을 사용할 수 없습니다.
          <br /> 3. 탈퇴 후 3개월간 정보가 저장되며, 이후 모든 내역이
          삭제됩니다.
        </p>
      </AgreeInfoBox>
      <AgreeBox>
        <p>
          위의 내용에 동의하시면 아래 <strong>‘동의합니다’</strong>라고
          입력하시고 탈퇴하기 버튼을 클릭해주세요.
        </p>
        <input type="text" placeholder="동의합니다" />
        <RemoveBtn>탈퇴하기</RemoveBtn>
      </AgreeBox>
    </Container>
  );
};

export default Profile;

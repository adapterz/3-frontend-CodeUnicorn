import axios from "axios";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthReducerType } from "slices";
import { IAuth } from "slices/auth";
import { setMessage } from "slices/toast";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 3rem;
  margin-left: 4rem;
  margin-bottom: 100px;
  width: 100%;
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

const NameBox = styled.div`
  margin-top: 30px;
  text-align: center;

  h2 {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 14px;
  }

  input {
    font-size: 1rem;
    width: 220px;
    border: none;
    border-bottom: 1px solid black;
    &:focus {
      outline: none;
    }
  }
`;

const SaveBtn = styled.button`
  margin: 40px 0px;
  margin-bottom: 80px;
  width: 100%;
  height: 40px;
  background-color: #b3b1b1;
  border-radius: 12px;
  color: white;
  font-size: 16px;

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

const Profile = () => {
  const [currentImage, setCurrentImage] = useState("/images/profile.png");
  const [currentName, setCurrentName] = useState("");
  const [testImage, setTestImage] = useState<any>();
  const dispatch = useDispatch();
  const {
    auth: { userId, userName },
  } = useSelector<AuthReducerType, IAuth>((state) => state);

  // 이미지 파일 추가시 미리보기
  const addFile = useCallback(({ target }) => {
    let reader = new FileReader();
    reader.onload = () => {
      setCurrentImage(reader.result as string);
    };
    reader.readAsDataURL(target.files[0]);
    setTestImage(target.files[0]);
  }, []);

  // name 값 가져오기
  const onChange = useCallback(
    ({ target }) => {
      setCurrentName(target.value);
    },
    [currentName],
  );

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", testImage);
    formData.append("nickname", currentName);
    console.log(formData);

    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/${userId}/info `,
      {
        data: {
          formdata: formData,
        },
        headers: {
          "content-type": "multipart/form-data",
          withCredentials: true,
        },
      },
    );

    if (response.status === 200) {
      const input = document.querySelector("#input-name") as HTMLInputElement;
      input.value = "";
      console.log(response);
      dispatch(
        setMessage({ message: "프로필 정보를 성공적으로 변경되었습니다." }),
      );
      setTimeout(() => {
        setMessage({ message: "" });
      }, 4000);
    } else {
      dispatch(setMessage({ message: "프로필 정보 변경에 실패했습니다." }));
    }
  };

  // 닉네임 저장 이벤트
  const onSave = useCallback(async (formdata) => {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/${userId}/info `,
      {
        data: {
          formdata: formdata,
        },
        headers: {
          "content-type": "multipart/form-data",
          withCredentials: true,
        },
      },
    );

    if (response.status === 200) {
      const input = document.querySelector("#input-name") as HTMLInputElement;
      input.value = "";
      console.log(response);
      dispatch(
        setMessage({ message: "프로필 정보를 성공적으로 변경되었습니다." }),
      );
      setTimeout(() => {
        setMessage({ message: "" });
      }, 4000);
    } else {
      dispatch(setMessage({ message: "프로필 정보 변경에 실패했습니다." }));
    }
  }, []);

  return (
    <Container>
      <Title>내정보</Title>
      <InfoBox>
        <ImageBox htmlFor="input-file">
          <form
            method="post"
            encType="multipart/form-data"
            onSubmit={handelSubmit}
          >
            <img src={currentImage} />
            <input
              type="file"
              id="input-file"
              accept=".jpg, .jpeg, .png"
              style={{ display: "none" }}
              onChange={addFile}
            />
            <SaveBtn type="submit"></SaveBtn>
          </form>
        </ImageBox>
        <NameBox>
          <h2>닉네임</h2>
          <input
            id="input-name"
            type="text"
            placeholder={userName}
            minLength={2}
            maxLength={8}
            onChange={onChange}
          />
        </NameBox>
        {/* <SaveBtn
          type="submit"
          onClick={() => onSave(currentName, currentImage)}
        >
          저장
        </SaveBtn> */}
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

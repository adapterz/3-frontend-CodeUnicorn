import styled from "styled-components";
import Aside from "@/components/user/Aside";
import Profile from "@/components/user/Profile";
import { useDispatch, useSelector } from "react-redux";
import { AuthReducerType } from "slices";
import { IAuth } from "slices/auth";
import { useRouter } from "next/router";
import Auth from "@/components/Auth";
import { useState } from "react";
import axios from "axios";
import { setMessage } from "slices/toast";

const Container = styled.div`
  width: 850px;
  margin: 0px auto;
  display: flex;
`;

function user() {
  const router = useRouter();
  const {
    auth: { isLogined, userId, userName, image },
  } = useSelector<AuthReducerType, IAuth>((state) => state);

  // ex
  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState(
    image || "/images/profile.png",
  );
  const [currentName, setCurrentName] = useState(userName);
  const [currentFile, setCurrentFile] = useState();
  const [formData, setFormData] = useState<any>();

  // ex
  const onSave = async (e: any) => {
    e.preventDefault();
    const formArr = new FormData();
    formArr.append("image", currentFile);
    formArr.append("nickname", currentName);
    setFormData(formArr);

    const response = await axios.post(`/api/upload' `, formData, {
      method: "POST",
    });

    if (response.status === 200) {
      const input = document.querySelector("#input-name") as HTMLInputElement;
      input.value = "";
      console.log(response);
      dispatch(
        setMessage({ message: "프로필 정보가 성공적으로 변경되었습니다." }),
      );
      setCurrentName(response.data.nickname);
      setCurrentImage(response.data.profilePath);
    } else {
      dispatch(setMessage({ message: "프로필 정보 변경에 실패했습니다." }));
    }
  };

  return (
    <Container>
      <Aside />
      <Profile
        userId={userId}
        userName={userName}
        image={image}
        onSave={onSave}
      />
      {/* {isLogined === true && router.asPath === `/users/${userId}` ? (
        <>
          <Aside />
          <Profile userId={userId} userName={userName} image={image} />
        </>
      ) : (
        <Auth />
      )} */}
    </Container>
  );
}

export default user;

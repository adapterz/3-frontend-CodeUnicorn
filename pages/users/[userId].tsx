import styled from "styled-components";
import Aside from "@/components/user/Aside";
import Profile from "@/components/user/Profile";
import { useRouter } from "next/router";
import Auth from "@/components/Auth";
import { Cookies } from "react-cookie";
import { NextSeo } from "next-seo";
import MyCourses from "@/components/user/MyCourses";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAuth } from "slices/auth";
import { AuthReducerType } from "slices";

const Container = styled.div`
  width: 850px;
  margin: 0px auto;
  display: flex;
`;

function user() {
  const [applyCourses, setApplyCourses] = useState([]);
  const [likeCourses, setLikeCourses] = useState([]);
  const cookies = new Cookies();
  const {
    auth: { userId, userName, image },
  } = useSelector<AuthReducerType, IAuth>((state) => state);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { data: applyCourses } = await axios.get(
        `https://api.codeunicorn.kr/users/${router.query.userId}/apply-courses`,
        {
          headers: {
            cookie: cookies.get("SESSION"),
          },
        },
      );
      setApplyCourses(applyCourses);
    })();

    (async () => {
      const {
        data: { courses: likeCourses },
      } = await axios.get(
        `https://api.codeunicorn.kr/users/${router.query.userId}/like-courses`,
        {
          headers: {
            cookie: cookies.get("SESSION"),
          },
        },
      );
      setLikeCourses(likeCourses);
    })();
  }, [router.query.userId]);

  return (
    <Container>
      <NextSeo
        title={`코드유니콘 | 마이페이지`}
        description="프로필 설정, 현재 수강 중인 교육 목록, 관심 교육 목록을 확인할 수 있습니다."
      />
      <Aside />
      <Profile
        userId={userId}
        currentName={userName}
        image={image}
        active={router.query.option === "my-page" ? true : false}
      />
      <MyCourses
        likeCourses={likeCourses}
        applyCourses={applyCourses}
        active={router.query.option === "my-courses" ? true : false}
      />
      {/* {cookies.get("SESSION") !== undefined ? (
        <>
          <Aside />
          <Profile
            userId={userId}
            currentName={userName}
            image={image}
            active={router.query.option === "my-page" ? true : false}
          />
          <MyCourses
            likeCourses={likeCourses}
            applyCourses={applyCourses}
            active={router.query.option === "my-courses" ? true : false}
          />
        </>
      ) : (
        <Auth />
      )} */}
    </Container>
  );
}

export default user;

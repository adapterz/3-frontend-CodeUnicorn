import styled from "styled-components";
import Aside from "@/components/user/Aside";
import Profile from "@/components/user/Profile";
import { useRouter } from "next/router";
import Auth from "@/components/Auth";
import { Cookies } from "react-cookie";
import { NextSeo } from "next-seo";
import MyCourses from "@/components/user/MyCourses";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import { UserTypes } from "@/interface/user";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 850px;
  margin: 0px auto;
  display: flex;
`;

function user({ user }) {
  const [applyCourses, setApplyCourses] = useState([]);
  const [likeCourses, setLikeCourses] = useState([]);
  const cookies = new Cookies();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { data: applyCourses } = await axios.get(
        `https://api.codeunicorn.kr/users/${router.query.userId}/apply-courses`,
      );
      setApplyCourses(applyCourses);
    })();

    (async () => {
      const {
        data: { courses: likeCourses },
      } = await axios.get(
        `https://api.codeunicorn.kr/users/${router.query.userId}/like-courses`,
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
      {cookies.get("SESSION") !== undefined ? (
        <>
          <Aside />
          <Profile
            userId={user.id}
            currentName={user.nickname}
            image={user.profilePath}
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
      )}
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: users } = await axios.get(
    "https://api.codeunicorn.kr/users/all",
  );

  const paths = users.map((user: UserTypes) => ({
    params: {
      userId: user.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // 유저 정보 API
  const {
    data: { data: user },
  } = await axios.get(`https://api.codeunicorn.kr/users/${params.userId}`);

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user },
    revalidate: 3600,
  };
};

export default user;

import Player from "@/components/player/Player";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AuthReducerType, ToastReducerType } from "slices";
import { IAuth } from "slices/auth";
import { setMessage, ToastType } from "slices/toast";
import Auth from "@/components/Auth";

const Container = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  background-color: white;
`;

const course = {
  id: 1,
  title: "처음 만난 리액트(React)",
  category: "프론트엔드",
  description:
    "대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다 그러므로 그들은 길지 아니한 목숨을 사는가 싶이 살았으며 그들의 그림자는 천고에 사라지지 않는 것이다 이것은 현저하게 일월과 같은 예가 되려니와 그와 같지 못하다 할지라도 창공에 반짝이는 뭇 별과 같이 산야에 피어나는 군영과 같이 이상은 실로 인간의 부패를 방지하는 소금이라 할지니 인생에 가치를 주는 원질이 되는 것이다 그들은 앞이 긴지라 착목한는 곳이 원대하고 그들은 피가 더운지라 실현에 대한 자신과 용기가 있다 그러므로 그들은 이상의 보배를 능히 품으며 그들의 이상은 아름답고 소담스러운 열매를 수 있는 것이다 석가는 무엇을 위하여 설산에서 고행을 하였으며 예수는 무엇을 위하여 광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가? 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다 그러므로 그들은 길지 아니한 목숨을 사는가 싶이 살았으며 그들의 그림자는 천고에 사라지지 않는 것이다 이것은 현저하게 일월과 같은 예가 되려니와 그와 같지 못하다 할지라도 창공에 반짝이는 뭇 별과 같이 산야에 피어나는 군영과 같이 이상은 실로 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다 석가는 무엇을 위하여 설산에서 고행을 하였으며 예수는 무엇을 위하여 광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가? 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다. 사는가 싶이 살았으며 그들의 그림자는 천고에 사라지지 않는 것이다 이것은 현저하게 일월과 같은 예가 되려니와 그와 같지 못하다 할지라도 창공에 반짝이는 뭇 별과 같이 산야에 피어나는 군영과 같이 이상은 실로 인간의 부패를 방지하는 소금이라 할지니 인생에 가치를 주는 원질이 되는 것이다 그들은 앞이 긴지라 착목한는 곳이 원대하고 그들은 피가 더운지라 실현에 대한 자신과 용기가 있다 그러므로 그들은 이상의 보배를 능히 품으며 그들의 이상은 아름답고 소담스러운 열매를 맺어 우리 인생을 풍부하게 하는 것이다 보라 청춘을 ! 그들의 몸이 얼마나 튼튼하며 그들의 피부가 얼마나 생생하며 그들의 눈에 무엇이 타오르고 있는가? 얼음이 있을 뿐이다 그들에게 생명을 불어 넣는 것은 따뜻한 봄바람이다 풀밭에 속잎나고 가지에 싹이 트고 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은 사막이다 오아이스도 없는 사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은",
  image:
    "https://cdn.inflearn.com/public/courses/328866/cover/174035a3-ca6b-48cd-b122-c88df540cb04/처음_만난_리액트_v2_cover_inflearn.png",
  totalUsers: 362,
  rating: 4.9,
  ratingsRate: 214,
  instructor: {
    name: "Inje Lee (소플)",
    introduction:
      "안녕하세요: 컬러테라피스트, 사회복지사 튜터 지니입니다. 평소 사람에 대한 관심이 많고 관계를 중요하게 생각하다보니 컬러테라피스트, 사회복지사를 직업으로 갖게 되었어요! 사회복지사로 일하면서 상담일을 주로하는데, 내 자신을 잘 모르면서 누군가를 상담하는 것은 모순적이고 어려움을 느껴 공부 하게 되었어요. 그때 접하게 된 컬러! 배우고 공부하는 기간 재미있고! 흥미롭고! 신기방기! 했어요^^ 감정이 무의식에서 컬러, 색채로 표현되고 나타날 수 있어요. 좋다 감정도 설레임, 기쁨, 즐거움, 재미, 행복함, 감격스러움, 감동, 등등 여러감정으로 구분 할 수 있어 하나의 감정으로 정의할 수 없고 복합적이고 입체적이라 관찰하는 부분이 중요해요. 이후 복지관 동료 복지사들, 대상자 분들에게도 상담을 다양한 연령, 직업군, 성향으로 상담하게 되었어요. 사람은 타고난 기질과 체질, 자라온 환경, 자신의 의지 등으로 모두의 스토리가 다르고 하나의 인격체로 소중하고 존중받아야 하잖아요. 저부터도 그렇거든요. 아마 절 만나시면 편안함 속에서 대화를 나누실 수 있어요: 기대하셔도 좋아요!!",
    image:
      "https://cdn.inflearn.com/public/files/courses/324145/c8738b0e-99c5-45c1-9fc0-3b64141b36b6/inflearn_python_04.png",
  },
};

// 더미데이터
const dumySection = [
  // 챕터
  {
    id: 1,
    name: "1. 컴퓨터 기본",
    totalHours: "06:14",
    lectureCount: 2,
    lectures: [
      // 강의
      {
        id: 1,
        name: "컴퓨터란?",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
      {
        id: 2,
        name: "컴퓨터 부품은?",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
    ],
  },
  // 챕터
  {
    id: 2,
    name: "2. 컴퓨터 언어의 기본",
    totalHours: "06:14",
    lectureCount: 3,
    lectures: [
      // 강의
      {
        id: 3,
        name: "컴퓨터 언어란 무엇일까?",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
      {
        id: 4,
        name: "컴퓨터 언어를 배우는 이유는?",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
      {
        id: 5,
        name: "컴퓨터 언어의 종류와 배워야하는 것 ",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
    ],
  },
  // 챕터
  {
    id: 3,
    name: "3. 컴퓨터 언어의 이해",
    totalHours: "06:14",
    lectureCount: 3,
    // 강의
    lectures: [
      {
        id: 6,
        name: "반복문이란?",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
      {
        id: 7,
        name: "배열이란?",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
      {
        id: 8,
        name: "리스트란?",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
    ],
  },
  // 챕터
  {
    id: 4,
    name: "4. 컴퓨터 언어 실습",
    totalHours: "06:14",
    lectureCount: 3,
    lectures: [
      // 강의
      {
        id: 9,
        name: "컴퓨터 언어란 무엇일까?",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
      {
        id: 10,
        name: "컴퓨터 언어를 배우는 이유는?",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
      {
        id: 11,
        name: "컴퓨터 언어의 종류와 배워야하는 것 ",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
    ],
  },
  // 챕터
  {
    id: 5,
    name: "5. 컴퓨터 언어를 이용한 프로젝트",
    totalHours: "06:14",
    lectureCount: 3,
    lectures: [
      // 강의
      {
        id: 12,
        name: "컴퓨터 언어란 무엇일까?",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
      {
        id: 13,
        name: "컴퓨터 언어를 배우는 이유는?",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
      {
        id: 14,
        name: "컴퓨터 언어의 종류와 배워야하는 것 ",
        desc: "",
        videoUrl:
          "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
        playTime: "03:24",
      },
    ],
  },
];

const lectures = [
  {
    id: 1,
    name: "컴퓨터란?",
    desc: "",
    videoUrl:
      "https://www.youtube.com/embed/dvQMbg7n6mY?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
    playTime: "03:24",
  },
  {
    id: 2,
    name: "컴퓨터 부품은?",
    desc: "",
    videoUrl:
      "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
    playTime: "03:24",
  },
  {
    id: 3,
    name: "컴퓨터 언어란 무엇일까?",
    desc: "",
    videoUrl:
      "https://www.youtube.com/embed/6szcPNsEGsw?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
    playTime: "03:24",
  },
  {
    id: 4,
    name: "컴퓨터 언어를 배우는 이유는?",
    desc: "",
    videoUrl:
      "https://www.youtube.com/embed/0AinoaApDjc?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
    playTime: "03:24",
  },
  {
    id: 5,
    name: "컴퓨터 언어의 종류와 배워야하는 것 ",
    desc: "",
    videoUrl:
      "https://www.youtube.com/embed/-1auqB4hvus?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
    playTime: "03:24",
  },
];

const initalLecture = {
  id: 1,
  name: "컴퓨터란?",
  desc: "",
  videoUrl:
    "https://www.youtube.com/embed/05uFo_-SGXU?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-",
  playTime: "03:24",
};

function lecture() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    auth: { isLogined },
  } = useSelector<AuthReducerType, IAuth>((state) => state);
  const [lecture, setLecture] = useState<{}>(initalLecture);
  useEffect(() => {
    isLogined === true
      ? lectures.filter((lecture) =>
          lecture.id === Number(router.query.lecture)
            ? setLecture({ ...lecture })
            : // TODO API로 변경 후 요청 실패시 Toast에 response.setError 설정
              dispatch(
                setMessage({
                  message: "API 요청 실패",
                } as ToastType),
              ),
        )
      : dispatch(
          setMessage({ message: "로그인 후 접근할 수 있습니다." } as ToastType),
        );
  }, [router.query.lecture]);
  return (
    <Container>
      {isLogined === true ? (
        <Player course={course} section={dumySection} lecture={lecture} />
      ) : (
        <Auth />
      )}
    </Container>
  );
}

export default lecture;

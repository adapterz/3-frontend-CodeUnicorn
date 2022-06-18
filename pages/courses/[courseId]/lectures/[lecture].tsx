import Player from "@/components/player/Player";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AuthReducerType } from "slices";
import { IAuth } from "slices/auth";
import { setMessage, ToastType } from "slices/toast";
import Auth from "@/components/Auth";
import axios from "axios";

const Container = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  background-color: white;
`;

function lecture() {
  const { query } = useRouter();
  const [courseDetail, setCourseDetail] = useState({});
  const [curriculum, setCurriculum] = useState([]);
  const [lecture, setLecture] = useState({});
  const [instructor, setiInstructor] = useState([]);
  const dispatch = useDispatch();
  const {
    auth: { isLogined },
  } = useSelector<AuthReducerType, IAuth>((state) => state);

  if (isLogined === true) {
    // 강의 정보를 가져오는 로직
    useEffect(() => {
      (async () => {
        const response = await axios.get(
          `https://api.codeunicorn.kr/courses/${query.courseId}`,
        );
        response.status === 200
          ? setCourseDetail(response.data.data)
          : dispatch(
              setMessage({ message: "강의 정보를 가져오는데 실패했습니다." }),
            );
        setiInstructor(response.data.data.instructor);
      })();
    }, [query.courseId]);

    // 강의 커리큘럼을 가져오는 로직
    useEffect(() => {
      (async () => {
        const response = await axios.get(
          `https://api.codeunicorn.kr/courses/${query.courseId}/curriculum`,
        );
        if (response.status === 200) {
          setCurriculum(response.data.data.sections);
        } else {
          dispatch(
            setMessage({ message: "강의 정보를 가져오는데 실패했습니다." }),
          );
        }
      })();
    }, [query.courseId]);

    // 강의 상세정보를 가져오는 로직
    useEffect(() => {
      (async () => {
        const response = await axios.get(
          `https://api.codeunicorn.kr/courses/${query.courseId}/lectures/${query.lecture}`,
        );
        response.status === 200
          ? setLecture(response.data.data.lecture)
          : dispatch(
              setMessage({ message: "강의 정보를 가져오는데 실패했습니다." }),
            );
      })();
    }, [query.lecture]);
  }

  return (
    <Container>
      <Player
        courseDetail={courseDetail}
        curriculum={curriculum}
        lecture={lecture}
        instructor={instructor}
      />
      {/* {isLogined === true ? (
        <Player
          courseDetail={courseDetail}
          curriculum={curriculum}
          lecture={lecture}
          instructor={instructor}
        />
      ) : (
        <Auth />
      )} */}
    </Container>
  );
}

export default lecture;

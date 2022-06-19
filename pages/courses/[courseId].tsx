import CourseInfo from "@/components/course/CourseInfo";
import Curriculum from "@/components/course/Curriculum";
import Introduction from "@/components/course/Introduction";
import Recomend from "@/components/course/Recomend";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "slices/toast";

function course() {
  const { query } = useRouter();
  const [courseDetail, setCourseDetail] = useState([]);
  const [instructor, setInstructor] = useState({});
  const [curriculum, setCurriculum] = useState([]);
  const [recomendCourses, setRecomendCourses] = useState([]);
  const dispatch = useDispatch();

  const onLike = useCallback(() => {
    dispatch(
      setMessage({ message: "로그인 후 관심 교육을 등록할 수 있습니다." }),
    );
    setTimeout(() => {
      dispatch(setMessage({ message: "" }));
    }, 5000);
  }, []);

  // 강의 디테일 정보를 가져오는 로직
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.codeunicorn.kr/courses/${query.courseId}`,
      );
      setCourseDetail(response.data.data);
      setInstructor(response.data.data.instructor);
    })();
  }, [query.courseId]);

  // 커리큘럼 정보를 가져오는 로직
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.codeunicorn.kr/courses/${query.courseId}/curriculum`,
      );
      setCurriculum(response.data.data.sections);
    })();
  }, [query.courseId]);

  // 추천 강의를 가져오는 로직
  useEffect(() => {
    (async () => {
      const {
        data: {
          data: { courses },
        },
      } = await axios.get(
        `https://api.codeunicorn.kr/courses?category=all&page=1`,
      );
      setRecomendCourses(courses);
    })();
  }, []);

  return (
    <>
      <CourseInfo
        courseDetail={courseDetail}
        instructor={instructor}
        onLike={onLike}
      />
      <Introduction courseDetail={courseDetail} instructor={instructor} />
      <Curriculum curriculum={curriculum} />
      <Recomend recomendCourses={recomendCourses} />
    </>
  );
}

export default course;

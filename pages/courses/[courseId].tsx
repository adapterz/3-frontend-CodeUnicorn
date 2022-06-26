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
  const router = useRouter();
  const [allCourses, setAllCourses] = useState([]);
  const [courseDetail, setCourseDetail] = useState([]);
  const [instructor, setInstructor] = useState({});
  const [curriculum, setCurriculum] = useState([]);
  const [recomendCourses, setRecomendCourses] = useState([]);
  const [initLecture, setInitLecture] = useState();
  const dispatch = useDispatch();

  // 모든 강의를 가져오는 로직
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://api.codeunicorn.kr/courses/all",
      );
      setAllCourses(response.data.courses);
    })();
  }, []);

  allCourses.length !== 0 &&
    allCourses.length < Number(router.query.courseId) &&
    router.push("/404");

  const onLike = useCallback(() => {
    dispatch(setMessage({ message: "관심 교육 등록은 준비 중입니다." }));
  }, []);

  // 강의 디테일 정보를 가져오는 로직
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.codeunicorn.kr/courses/${router.query.courseId}`,
      );
      if (response.status === 200) {
        setCourseDetail(response.data.data);
        setInstructor(response.data.data.instructor);
      }
    })();
  }, [router.query.courseId]);

  // 커리큘럼 정보를 가져오는 로직
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.codeunicorn.kr/courses/${router.query.courseId}/curriculum`,
      );
      if (response.status === 200) {
        setCurriculum(response.data.data.sections);
        setInitLecture(response.data.data.sections[0].lectures[0].id);
      }
    })();
  }, [router.query.courseId]);

  // 추천 강의를 가져오는 로직
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.codeunicorn.kr/courses?category=all&page=1`,
      );
      response.status === 200 && setRecomendCourses(response.data.data.courses);
    })();
  }, []);

  return (
    <>
      <CourseInfo
        courseDetail={courseDetail}
        instructor={instructor}
        initLecture={initLecture}
        curriculum={curriculum}
        onLike={onLike}
      />
      <Introduction courseDetail={courseDetail} instructor={instructor} />
      <Curriculum curriculum={curriculum} />
      <Recomend recomendCourses={recomendCourses} />
    </>
  );
}

export default course;

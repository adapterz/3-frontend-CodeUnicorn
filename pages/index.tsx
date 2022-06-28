import Banner from "@/components/home/Banner";
import Contents from "@/components/home/Contents";
import Custom from "@/components/home/Custom";
import Recomend from "@/components/home/Recomend";
import { CourseTypes } from "@/interface/course";
import axios from "axios";
import { GetStaticProps } from "next";

type HomeProps = {
  courses: CourseTypes[];
  backCourses: CourseTypes[];
  recommendCourses: CourseTypes[];
};

export default function Home({
  courses,
  backCourses,
  recommendCourses,
}: HomeProps) {
  return (
    <>
      <Banner newCourse={courses.slice(-1)[0]} />
      <Contents courses={courses} backCourses={backCourses} />
      <Custom />
      <Recomend recommendCourses={recommendCourses} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // 전체 강의 API
  const {
    data: { courses },
  } = await axios.get(`https://api.codeunicorn.kr/courses/all`);

  // 백엔드 강의 API
  const {
    data: {
      data: { courses: backCourses },
    },
  } = await axios.get(
    "https://api.codeunicorn.kr/courses?category=backend&page=1",
  );

  // 추천 강의 API
  const recommendCourses = [];

  for (let i = 9; i <= 14; i++) {
    const {
      data: { data },
    } = await axios.get(`https://api.codeunicorn.kr/courses/${i}`);
    recommendCourses.push(data);
  }

  if (!courses || !backCourses || !recommendCourses) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      courses,
      backCourses,
      recommendCourses,
    },
    revalidate: 86400,
  };
};

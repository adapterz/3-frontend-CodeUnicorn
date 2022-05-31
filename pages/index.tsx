import Footer from "@/components/Footer";
import Banner from "@/components/home/Banner";
import Contents from "@/components/home/Contents";
import Recomend from "@/components/home/Recomend";

// 더미 데이터
const recomendCourse = {
  id: 1,
  title: "쉽고 빠르게 끝내는 GO언어 프로그래밍 핵심 기초 입문 과정",
  catagory: "프로그래밍 언어",
  instructor: "MJ코딩",
  description:
    "구글 서버, Docker, 우버등이 Go언어를 활용한 대표 프로젝트이고 최근에는 데이터 분석 및 블록체인에서도 많이 활용하고 있어 Go언어의 인기는 계속해서 수직 상승할 것으로 예상됩니다. 쉽고 빠르게 끝내는 GO 언어 프로그래밍 핵심 기초 입문 과정",
  image: "https://cdn.inflearn.com/wp-content/uploads/golang.jpg",
  totalUsers: 362,
  rating: 4.9,
  ratingsRate: 214,
};

export default function Home() {
  return (
    <>
      <Banner
        name="모의해킹 실무자가 알려주는, SQL Injection 고급 공격 기법"
        description="해킹의 기본 공격의 핵심 원리를 넘어서 테크니컬한 고급 공격 기법에 대한 강의입니다."
        image="https://cdn.inflearn.com/public/course-326041-cover/a20d39f8-54f7-4b35-976e-86b9e272819c"
      />
      <Contents />
      <Recomend
        catagory={recomendCourse.catagory}
        title={recomendCourse.title}
        instructor={recomendCourse.instructor}
        description={recomendCourse.description}
        image={recomendCourse.image}
        rating={recomendCourse.rating}
        ratingsRate={recomendCourse.ratingsRate}
      />
      <Footer />
    </>
  );
}

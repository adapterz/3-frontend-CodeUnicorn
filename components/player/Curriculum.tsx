import styled from "styled-components";
import { ISection, ILecture } from "@/interface/course";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import Loading from "../Loading";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  position: relative;
`;

const BackBtn = styled.button`
  padding: 6px;
  min-width: 100px;
  height: 40px;
  border-radius: 12px;
  background-color: #444444;
  color: white;
  position: absolute;
  top: 1%;
  right: 1.125rem;
  display: flex;
  align-items: center;

  svg {
    font-size: 1.5rem;
    padding-bottom: 2px;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Section = styled.div`
  margin-bottom: 30px;
  &:first-child {
    margin-top: 70px;
  }
  &:last-child {
    padding-bottom: 40px;
  }
  &:last-child {
    padding-bottom: 40px;
  }
`;

const SectionInfo = styled.div`
  display: flex;
  border-bottom: 1px solid #333333;

  .section__name {
    font-size: 18px;
    padding-bottom: 10px;
    font-weight: bold;
  }
`;

const Lecture = styled.div`
  display: flex;
  transition: all 0.4s ease-in-out;

  .lecture__name {
    min-width: 360px;
    font-size: 16px;
    padding: 12px 12px;
    color: #444444;
  }

  svg {
    font-size: 1.5rem;
    padding-top: 6px;
    margin-right: 8px;
    color: black;
    opacity: 0.7;
  }

  .play__time {
    min-width: 90px;
    padding: 12px 12px;
  }

  &:hover {
    background-color: lightgray;
  }

  & {
    border-bottom: 1px solid darkgray;
  }
`;

// type CurriculumProps = {
//   CurriculumTypes:
// };

function Curriculum({ curriculum }) {
  const router = useRouter();
  return (
    <>
      {curriculum === undefined ? (
        <Loading />
      ) : (
        <Container>
          <Link href={`/courses/${router.query.courseId}`}>
            <a>
              <BackBtn>
                <BsArrowLeftShort />
                이전화면
              </BackBtn>
            </a>
          </Link>
          <InnerContainer>
            {curriculum.length === 0 ? (
              <LoadingContainer>
                <Loading />
              </LoadingContainer>
            ) : (
              curriculum.sections.map((section: ISection) => (
                <Section key={section.id}>
                  <SectionInfo>
                    <h2 className="section__name">{section.name}</h2>
                  </SectionInfo>
                  {section.lectures.map((lecture: ILecture) => (
                    <Link
                      key={lecture.id}
                      href={`/courses/${router.query.courseId}/lectures/${lecture.id}`}
                    >
                      <a>
                        <Lecture key={lecture.id}>
                          <h3 className="lecture__name">{lecture.name}</h3>
                          <span className="play__time">{lecture.playTime}</span>
                        </Lecture>
                      </a>
                    </Link>
                  ))}
                </Section>
              ))
            )}
          </InnerContainer>
        </Container>
      )}
    </>
  );
}

export default Curriculum;

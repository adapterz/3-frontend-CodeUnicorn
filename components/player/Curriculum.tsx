import styled from "styled-components";
import { ISection, ILecture } from "@/interface/course";
import Link from "next/link";
import { useRouter } from "next/router";

const Container = styled.div`
  width: 50%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
`;

const Section = styled.div`
  margin-bottom: 20px;
  &:first-child {
    margin-top: 40px;
  }
`;

const SectionInfo = styled.div`
  display: flex;
  border-bottom: 1px solid #333333;

  .section__name {
    font-size: 18px;
    padding-bottom: 10px;
    font-weight: bold;
    flex: 1;
  }
`;

const Lecture = styled.div`
  display: flex;
  transition: all 0.4s ease-in-out;

  .lecture__name {
    font-size: 16px;
    padding: 12px 12px;
    flex: 1;
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
    padding: 12px 12px;
  }

  &:hover {
    background-color: lightgray;
  }

  & {
    border-bottom: 1px solid darkgray;
  }
`;

function Curriculum({ section }) {
  const router = useRouter();
  return (
    <Container>
      {section.map((section: ISection) => (
        <Section key={section.id}>
          <SectionInfo>
            <h2 className="section__name">{section.name}</h2>
          </SectionInfo>
          {section.lectures.map((lecture: ILecture) => (
            <Link
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
      ))}
    </Container>
  );
}

export default Curriculum;
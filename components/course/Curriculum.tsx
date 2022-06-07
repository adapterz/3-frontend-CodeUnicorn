import styled from "styled-components";
import { MdTimer } from "react-icons/md";
import { ISection, ILecture } from "@/interface/course";

const Container = styled.div`
  width: 850px;
  margin: 0px auto;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
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

  .section__lecture {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 10px;
    margin-right: 6px;
  }

  .section__time {
    padding: 0px 12px;
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 10px;
  }
`;

const Lecture = styled.div`
  display: flex;

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

  & + & {
    border-top: 1px solid darkgray;
  }
`;

function Curriculum({ section }) {
  return (
    <Container>
      <h1>커리큘럼</h1>
      {section.map((section: ISection) => (
        <Section key={section.name}>
          <SectionInfo>
            <h2 className="section__name">{section.name}</h2>
            <span className="section__lecture">{section.lectureCount}강</span>
            <span className="section__time">{section.totalHours}</span>
          </SectionInfo>
          {section.lectures.map((lecture: ILecture) => (
            <Lecture key={lecture.name}>
              <h3 className="lecture__name">{lecture.name}</h3>
              <MdTimer />
              <span className="play__time">{lecture.playTime}</span>
            </Lecture>
          ))}
        </Section>
      ))}
    </Container>
  );
}

export default Curriculum;

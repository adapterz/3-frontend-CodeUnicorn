import styled from "styled-components";
import { LectureTypes, SectionTypes } from "@/interface/course";

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
    min-width: 650px;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 18px;
    padding-bottom: 10px;
    line-height: 21px;
    padding-left: 18px;
  }

  .section__lecture {
    font-size: 18px;
    font-family: "Roboto";
    font-weight: 700;
    margin-right: 50px;
    line-height: 21px;
    text-align: right;
  }

  .section__time {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: right;
  }
`;

const Lecture = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;

  .lecture__name {
    min-width: 652px;
    font-size: 16px;
    color: #444444;
    padding-left: 20px;
  }

  .timer {
    margin-right: 50px;
  }

  .play__time {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: right;
  }

  & + & {
    border-top: 1px solid darkgray;
  }
`;

function Curriculum({ curriculum }) {
  return (
    <>
      {curriculum && (
        <Container>
          <h1>커리큘럼</h1>
          {curriculum.map((section: SectionTypes) => (
            <Section key={section.name}>
              <SectionInfo>
                <h2 className="section__name">{section.name}</h2>
                <span className="section__lecture">
                  {section.lectureCount}강
                </span>
                <span className="section__time">{section.totalHours}</span>
              </SectionInfo>
              {section.lectures.map((lecture: LectureTypes) => (
                <Lecture key={lecture.name}>
                  <h3 className="lecture__name">{lecture.name}</h3>
                  <svg
                    className="timer"
                    width="23"
                    height="25"
                    viewBox="0 0 25 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5756 22.9431C17.1465 22.9431 20.852 19.3457 20.852 14.9081C20.852 10.4705 17.1465 6.87305 12.5756 6.87305C8.00475 6.87305 4.29932 10.4705 4.29932 14.9081C4.29932 19.3457 8.00475 22.9431 12.5756 22.9431Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M12.5753 25.9996C18.885 25.9996 24 21.0338 24 14.908C24 8.78229 18.885 3.81641 12.5753 3.81641C6.26564 3.81641 1.15063 8.78229 1.15063 14.908C1.15063 21.0338 6.26564 25.9996 12.5753 25.9996Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M10.6813 1H14.4687"
                      stroke="#333333"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M12.5753 3.81628V1"
                      stroke="#333333"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M7.07014 5.18773L5.22284 3.39428C4.97373 3.15243 4.56671 3.15243 4.3176 3.39428L1.18684 6.43377C0.937721 6.67562 0.937721 7.07077 1.18684 7.31262L2.91305 8.98851C3.94365 7.40584 5.37541 6.09403 7.07014 5.18773Z"
                      stroke="#333333"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M12.5753 6.87305V8.46866"
                      stroke="#333333"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M4.2998 14.9082H5.94333"
                      stroke="#333333"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M12.5753 22.9433V21.3477"
                      stroke="#333333"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M20.8521 14.9082H19.2086"
                      stroke="#333333"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M12.5753 11.5693V14.9087H14.469"
                      stroke="#333333"
                      stroke-miterlimit="10"
                    />
                  </svg>

                  <span className="play__time">{lecture.playTime}</span>
                </Lecture>
              ))}
            </Section>
          ))}
        </Container>
      )}
    </>
  );
}

export default Curriculum;

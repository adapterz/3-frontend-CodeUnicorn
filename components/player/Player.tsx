import { CourseTypes, CurriculumTypes, LectureTypes } from "@/interface/course";
import styled from "styled-components";
import Curriculum from "./Curriculum";
import VideoInfo from "./VideoInfo";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

type playerProps = {
  courseDetail: CourseTypes;
  curriculum: CurriculumTypes;
  lecture: LectureTypes;
  videoUrl: string;
  sourcesType: string;
};

function Player({
  courseDetail,
  curriculum,
  lecture,
  videoUrl,
  sourcesType,
}: playerProps) {
  return (
    <Container>
      <VideoInfo
        courseDetail={courseDetail}
        lecture={lecture}
        videoUrl={videoUrl}
        sourcesType={sourcesType}
      />
      <Curriculum curriculum={curriculum} />
    </Container>
  );
}

export default Player;

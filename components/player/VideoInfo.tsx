import { CourseTypes, LectureTypes } from "@/interface/course";
import styled from "styled-components";
import Header from "./Header";
import Video from "./Video";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

type videoInfoProps = {
  courseDetail: CourseTypes;
  lecture: LectureTypes;
  videoUrl: string;
  sourcesType: string;
};

function VideoInfo({
  courseDetail,
  lecture,
  videoUrl,
  sourcesType,
}: videoInfoProps) {
  return (
    <Container>
      <Header courseDetail={courseDetail} />
      <Video lecture={lecture} videoUrl={videoUrl} sourcesType={sourcesType} />
    </Container>
  );
}

export default VideoInfo;

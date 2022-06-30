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
};

function VideoInfo({ courseDetail, lecture }: videoInfoProps) {
  return (
    <Container>
      <Header courseDetail={courseDetail} />
      <Video lecture={lecture} />
    </Container>
  );
}

export default VideoInfo;

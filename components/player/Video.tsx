import { LectureTypes } from "@/interface/course";
import { useEffect } from "react";
import styled from "styled-components";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Container = styled.div`
  width: 100%;
  height: 88%;
  display: flex;

  .video-js {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .vjs-big-play-button {
    position: relative;
    margin: auto;
  }
`;

type videoProps = {
  lecture: LectureTypes;
  videoUrl: string;
  sourcesType: string;
};

function Video({ lecture, videoUrl, sourcesType }: videoProps) {
  useEffect(() => {
    const player = videojs("player", {
      sources: [
        {
          src: `${videoUrl}`,
          type: `${sourcesType}`,
        },
      ],
      fill: true,
      controls: true, //동영상 제어를 위한 컨트롤 바 제공 여부
      playsinline: true, // 웹 브라우저 환경의 재생 형태
      muted: false, //최초 재생시 무음인지
      preload: "auto", //비디오 데이터를 즉시 다운로드 시작할 지 여부
      playbackRates: [0.5, 0.75, 1, 1.25, 1.5], //재생 속도
      controlBar: {
        playToggle: true, //재생, 일지정지 토글
        pictureInPictureToggle: true, //pip모드
        remainingTimeDisplay: true, //남은 시간 표시
        progressControl: true, //재생 진행바
        qualitySelector: true, //품질 선택 창
      },
    });

    player.src({ type: sourcesType, src: videoUrl });
  }, [lecture, videoUrl]);

  return (
    <Container>
      <video id="player" className="video-js vjs-big-play-centeredh"></video>
    </Container>
  );
}

export default Video;

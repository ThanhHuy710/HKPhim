import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function VideoPlayer({ videoUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const hls = new Hls();

    hls.loadSource(videoUrl);
    hls.attachMedia(video);

    return () => {
      hls.destroy();
    };
  }, [videoUrl]);

  return (
    <video
      ref={videoRef}
      autoPlay={false}
      controls={true}
      width="100%"
      height="auto"
    />
  );
}

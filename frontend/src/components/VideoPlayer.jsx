import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import api from "../lib/axios";

export default function VideoPlayer({ videoUrl, filmId, currentViewCount }) {
  const videoRef = useRef(null);
  const [viewPosted, setViewPosted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const hls = new Hls();

    hls.loadSource(videoUrl);
    hls.attachMedia(video);

    return () => {
      hls.destroy();
    };
  }, [videoUrl]);

  const handleTimeUpdate = async () => {
    const video = videoRef.current;
    if (!video) return;

    // Nếu đã xem >= 10s và chưa gọi API thì gọi
    if (video.currentTime >= 10 && !viewPosted) {
      try {
        await api.patch(`/films/${filmId}`, {
          view_count: currentViewCount + 1,
        });

        setViewPosted(true); // tránh gọi nhiều lần
        console.log("Đã tăng view_count sau 10s");
      } catch (err) {
        console.error("Không thể tăng view_count:", err);
      }
    }
  };

  return (
    <video
      ref={videoRef}
      autoPlay={false}
      controls={true}
      width="100%"
      height="auto"
      onTimeUpdate={handleTimeUpdate}
    />
  );
}

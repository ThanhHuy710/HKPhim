import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import api from "../lib/axios";

export default function VideoPlayer({ videoUrl, filmId, currentViewCount, userId, episodeId }) {
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
        console.log("me", filmId, userId, episodeId);
        // Tăng view_count trên server
        await api.patch(`/films/${filmId}`, {
          view_count: currentViewCount + 1,
        });
        // Ghi nhận view vào bảng views
        await api.post(`/views`, { film_id: filmId, 
          episode_id: Number(episodeId), 
          user_id: userId, 
          progress: 10 
        });

        setViewPosted(true); // tránh gọi nhiều lần
      } catch (err) {
        console.error("lỗi ở phía server", err);
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
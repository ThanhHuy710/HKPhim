import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { toast } from "sonner";

export default function VideoPlayer({ videoUrl, subtitleUrl }) {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  useEffect(() => {
    if (!videoUrl || !videoRef.current) return;

    const video = videoRef.current;

    // HLS support
    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      
      hlsRef.current = hls;
      hls.loadSource(videoUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(err => {
          console.error("Autoplay error:", err);
        });
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          toast.error("Lỗi khi tải video");
        }
      });
    } 
    // Native HLS support (Safari)
    else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl;
    }

    // Cleanup
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [videoUrl]);

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        controls
        controlsList="nodownload"
        className="video-element"
        poster="/poster-placeholder.jpg"
      >
        {subtitleUrl && (
          <track
            kind="subtitles"
            src={subtitleUrl}
            srcLang="vi"
            label="Tiếng Việt"
            default
          />
        )}
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </div>
  );
}

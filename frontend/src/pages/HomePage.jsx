import { useEffect, useRef, useState } from "react";
import api from "../lib/axios"; // axios instance
import { toast } from "sonner";
import Hls from 'hls.js';
export default function HomePage() {
  //list phim
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const res = await api.get("/tasks"); // gọi API backend
        setFilms(res.data.films); // lưu danh sách phim vào state
      } catch (error) {
        console.error("Lỗi khi truy xuất Films:", error);
        toast.error("Không thể tải danh sách phim.");
      }
    };

    fetchFilms();
  }, []);
  //show phim
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    const hls = new Hls();

    hls.loadSource('https://s4.phim1280.tv/20250325/15U0OSx5/index.m3u8');
    hls.attachMedia(video);

    return () => {
      hls.destroy();
    };
  }, []);
  return (
    <>  
    <div >
      <h2> Danh sách phim</h2>
      <ul>
        {films.map((films) => (
          <li key={films.id}>
            <strong>{films.title}</strong> ({films.year})  {films.country}
          </li>
        ))}
      </ul>
    </div>
    <div>
       <video ref={videoRef} controls width="100%" />
    </div>
    </>

  );
}

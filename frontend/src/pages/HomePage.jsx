import { useEffect, useState } from "react";
import api from "../lib/axios"; // axios instance
import { toast } from "sonner";

export default function HomePage() {
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

  return (
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
  );
}

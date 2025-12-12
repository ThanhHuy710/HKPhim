import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import api from "../lib/axios";

export default function SeasonAndEpisodes({ film }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [seasons, setSeasons] = useState([]); // khởi tạo mảng
  const [selectedFilmId, setSelectedFilmId] = useState(film?.id ?? null);

  const fetchSeasons = async (filmObj) => {
    if (!filmObj?.id) return;
    setLoading(true);
    try {
      // <-- gọi endpoint mới: /films/:id/seasons
      const res = await api.get(`/films/${filmObj.id}/seasons`);
      const data = res?.data?.data ?? [];
      setSeasons(data);
      // chọn mặc định: nếu có phần trùng film.id thì giữ, nếu không lấy phần đầu
      const defaultId = data.find(d => d.id === filmObj.id)?.id ?? data[0]?.id ?? filmObj.id;
      setSelectedFilmId(defaultId);
    } catch (error) {
      console.error("Lỗi fetchSeasons:", error);
      toast.error("Không thể tải phần phim");
      setSeasons([]);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (!film) return;
    fetchSeasons(film);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [film?.id]);


  // handler chọn option (không dùng Link trong option)
  const handleChange = (e) => {
    const id = Number(e.target.value);
    setSelectedFilmId(id);
    // nếu muốn điều hướng tới trang xem ngay:
    navigate(`/film/${id}`);
  };

  // Hiển thị giao diện
  return (
    <div>
      <div className="mb-4">
        {loading ? (
          <div>Đang tải phần...</div>
        ) : seasons.length ? (
          <select
            className="px-3 py-2 bg-gray-800 rounded text-white"
            value={selectedFilmId ?? ""}
            onChange={handleChange}
          >
            {seasons.map((s) => (
              <option key={s.id} value={s.id}>
                {s.season!==0 ? `Phần ${s.season}` : "Phim lẻ"}
              </option>
            ))}
          </select>
        ) : (
          <div>Không có phần khác</div>
        )}
          <div className="flex flex-wrap gap-5 mt-5">
              {film.episodes.map((ep) => (
                <Link to={`/watch/${film.id}?episode=${ep.id}`}
                  key={ep.id}>
                  {ep.episode_name}
                </Link>
              ))}
            </div>
      </div>
    </div>
  );
}

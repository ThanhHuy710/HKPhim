import { Link, useLocation } from "react-router-dom";
import { countries } from "../lib/Array";
import { useEffect, useState } from "react";
import api from "../lib/axios";
import { toast } from "sonner";

export default function AdvancedSearch() {
  const [genres, setGenres] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await api.get("/genres");
        setGenres(res.data.data || []);
      } catch (error) {
        console.error("Lỗi:", error);
        toast.error("Không thể tải thể loại");
      }
    };
    fetchGenres();
  }, []);

  // Hàm kiểm tra active link
  const isActive = (path) => location.pathname + location.search === path;

  const linkClass = (path) =>
    `px-3 py-1 rounded ${
      isActive(path)
        ? "bg-yellow-500 text-black"
        : "bg-gray-700 text-white hover:bg-gray-600"
    }`;

  return (
    <div className="overflow-x-auto bg-gray-800 text-white rounded-lg p-6">
      <table className="table-auto w-full border-collapse">
        <tbody>
          {/* Loại phim */}
          <tr>
            <td className="p-2 font-semibold w-32">Loại phim</td>
            <td className="p-2">
              <div className="flex flex-wrap gap-2">
                <Link to="/search/type" className={linkClass("/search/type")}>
                  Tất cả
                </Link>
                <Link
                  to="/search/single-movies"
                  className={linkClass("/search/single-movies")}
                >
                  Phim lẻ
                </Link>
                <Link
                  to="/search/series"
                  className={linkClass("/search/series")}
                >
                  Phim bộ
                </Link>
              </div>
            </td>
          </tr>

          {/* Xếp hạng */}
          <tr>
            <td className="p-2 font-semibold">Xếp hạng</td>
            <td className="p-2">
              <div className="flex flex-wrap gap-2">
                <Link to="/search/rating" className={linkClass("/search/rating")}>
                  Tất cả
                </Link>
                <Link to="/search/rating/P" className={linkClass("/search/rating/P")}>
                  P (Mọi lứa tuổi)
                </Link>
                <Link to="/search/rating/K" className={linkClass("/search/rating/K")}>
                  K (Dưới 13 tuổi)
                </Link>
                <Link to="/search/rating/T13" className={linkClass("/search/rating/T13")}>
                  T13 (13+)
                </Link>
                <Link to="/search/rating/T16" className={linkClass("/search/rating/T16")}>
                  T16 (16+)
                </Link>
                <Link to="/search/rating/T18" className={linkClass("/search/rating/T18")}>
                  T18 (18+)
                </Link>
              </div>
            </td>
          </tr>

          {/* Thể loại */}
          <tr>
            <td className="p-2 font-semibold">Thể loại</td>
            <td className="p-2">
              <div className="flex flex-wrap gap-2">
                <Link to="/search/genre" className={linkClass("/search/genre")}>
                  Tất cả
                </Link>
                {genres.map((genre) => (
                  <Link
                    key={genre.id || genre.name}
                    to={`/search/genre/?name=${genre.name}`}
                    className={linkClass(`/search/genre/?name=${genre.name}`)}
                  >
                    {genre.name}
                  </Link>
                ))}
              </div>
            </td>
          </tr>

          {/* Quốc gia */}
          <tr>
            <td className="p-2 font-semibold">Quốc gia</td>
            <td className="p-2">
              <div className="flex flex-wrap gap-2">
                <Link to="/search/country" className={linkClass("/search/country")}>
                  Tất cả
                </Link>
                {countries.map((country) => (
                  <Link
                    key={country}
                    to={`/search/country/?name=${country}`}
                    className={linkClass(`/search/country/?name=${country}`)}
                  >
                    {country}
                  </Link>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Nút hành động */}
      <div className="flex justify-end gap-4 mt-6">
        <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">
          Lọc kết quả
        </button>
        <button className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500">
          Đóng
        </button>
      </div>
    </div>
  );
}

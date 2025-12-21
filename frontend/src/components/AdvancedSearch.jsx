import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../lib/axios";
import { toast } from "sonner";
import { countries } from "../lib/Array";

export default function AdvancedSearch({AvSearch}) {
  const [genres, setGenres] = useState([]);
  const [form, setForm] = useState({
    is_series: "",
    age_rating: "",
    genres: [],
    country: "",
    year: "",
  });
  const navigate = useNavigate();

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

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleGenre = (genre) => {
    setForm((prev) => {
      const exists = prev.genres.includes(genre);
      return {
        ...prev,
        genres: exists
          ? prev.genres.filter((g) => g !== genre)
          : [...prev.genres, genre],
      };
    });
  };

  const handleSubmit = () => {
    const params = new URLSearchParams();
    Object.entries(form).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          params.append("genre", value.join(","));
        }
      } else if (value !== "" && value != null) {
        params.append(key, value);
      }
    });
    navigate(`/search/criteria?${params.toString()}`);
    AvSearch(); //gọi ()=>setActiveAvSearch(false) 
  };

  const buttonClass = (active) =>
    `px-3 py-1 rounded ${
      active
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
            <td className="p-2 flex flex-wrap gap-2">
              <button
                onClick={() => handleChange("is_series", "")}
                className={buttonClass(form.is_series === "")}
              >
                Tất cả
              </button>
              <button
                onClick={() => handleChange("is_series", "false")}
                className={buttonClass(form.is_series === "false")}
              >
                Phim lẻ
              </button>
              <button
                onClick={() => handleChange("is_series", "true")}
                className={buttonClass(form.is_series === "true")}
              >
                Phim bộ
              </button>
            </td>
          </tr>

          {/* Xếp hạng */}
          <tr>
            <td className="p-2 font-semibold">Xếp hạng</td>
            <td className="p-2 flex flex-wrap gap-2">
              {["", "P", "K", "T13", "T16", "T18"].map((r) => (
                <button
                  key={r || "all"}
                  onClick={() => handleChange("age_rating", r)}
                  className={buttonClass(form.age_rating === r)}
                >
                  {r || "Tất cả"}
                </button>
              ))}
            </td>
          </tr>

          {/* Thể loại (multi-select) */}
          <tr>
            <td className="p-2 font-semibold">Thể loại</td>
            <td className="p-2 flex flex-wrap gap-2">
              <button
                onClick={() => setForm((prev) => ({ ...prev, genres: [] }))}
                className={buttonClass(form.genres.length === 0)}
              >
                Tất cả
              </button>
              {genres.map((g) => (
                <button
                  key={g.id || g.name}
                  onClick={() => toggleGenre(g.name)}
                  className={buttonClass(form.genres.includes(g.name))}
                >
                  {g.name}
                </button>
              ))}
            </td>
          </tr>

          {/* Quốc gia */}
          <tr>
            <td className="p-2 font-semibold">Quốc gia</td>
            <td className="p-2 flex flex-wrap gap-2">
              <button
                onClick={() => handleChange("country", "")}
                className={buttonClass(form.country === "")}
              >
                Tất cả
              </button>
              {countries.map((c) => (
                <button
                  key={c}
                  onClick={() => handleChange("country", c)}
                  className={buttonClass(form.country === c)}
                >
                  {c}
                </button>
              ))}
            </td>
          </tr>
          {/* Năm sản xuất */}
          <tr>
            <td className="p-2 font-semibold">Năm</td>
            <td className="p-2 flex flex-wrap gap-2">
              <button
                onClick={() => handleChange("year", "")}
                className={buttonClass(form.year === "")}
              >
                Tất cả
              </button>
              {Array.from(
                { length: 2025 - 2010 + 1 },
                (_, idx) => 2025 - idx
              ).map((year) => (
                <button
                  key={year}
                  onClick={() => handleChange("year", String(year))}
                  className={buttonClass(form.year === String(year))}
                >
                  {year}
                </button>
              ))}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Nút hành động */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
        >
          Lọc kết quả
        </button>
        <button
          onClick={() =>
            setForm({
              is_series: "",
              age_rating: "",
              genres: [],
              country: "",
              year: "",
            })
          }
          className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { toast } from "sonner";
import api from "../lib/axios";
import Layout from "../components/layout/Layout";
import MovieCard from "../components/MovieCard";
import { useParams, useSearchParams } from "react-router";
import ResultNameForListPage from "../components/ResultNameForListPage";
import AvataCard from "../components/AvataCard";
import AdvancedSearch from "../components/AdvancedSearch";
export default function ListPage() {
  const { type } = useParams(); // lấy param từ path
  const [searchParams] = useSearchParams(); // lấy query string
  const name = searchParams.get("name");

  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actors, setActors] = useState([]);
  const [viewMode, setViewMode] = useState("films"); // "films" hoặc "actors"
  const [activeAvSearch,setActiveAvSearch] = useState(false);
  const fetchFilm = async () => {
    try {
      setLoading(true);
      if (type === "titleoractor" && name) {
        const [resTitle, resActor] = await Promise.all([
          api.get(`/films/title/${name}`),
          api.get(`/films/actors/${name}`),
        ]);
        setFilm(resTitle.data.data || []);
        setActors(resActor.data.data || []);
      } else if (name) {
        const res = await api.get(`/films/${type}/${name}`);
        setFilm(res.data.data || []);
      } else {
        const res = await api.get(`/films/${type}`);
        setFilm(res.data.data || []);
      }
    } catch (error) {
      console.error("Lỗi:", error);
      toast.error("Không thể tải phim");
    } finally {
      setLoading(false);
    }
  };

  // Lắng nghe thay đổi type + query string
  useEffect(() => {
    fetchFilm();
  }, [type, name]);

  return (
    <Layout>
      <div className="py-4 mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
          <ResultNameForListPage type={type} name={name} />
        </h2>
        <button onClick={()=>setActiveAvSearch(!activeAvSearch)}
        className="p-2 mb-5 bg-gray-700 rounded hover:bg-gray-600">
          <img
            src="/images/funnel.png"
            alt="Filter"
            className="w-6 h-6 object-contain"
          />
        </button>
        {activeAvSearch && <AdvancedSearch ></AdvancedSearch> }

        {/* Nút chọn chế độ hiển thị */}
        {type === "titleoractor" && (
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setViewMode("films")}
              className={`px-4 py-2 rounded ${
                viewMode === "films"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-200"
              }`}
            >
              Phim
            </button>
            <button
              onClick={() => setViewMode("actors")}
              className={`px-4 py-2 rounded ${
                viewMode === "actors"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-200"
              }`}
            >
              Diễn viên
            </button>
          </div>
        )}

        {/* Hiển thị phim */}
        {viewMode === "films" && film && (
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {loading ? (
              <div className="loading">Đang tìm kiếm...</div>
            ) : film.length > 0 ? (
              film.map((f) => (
                <div key={f.id}>
                  <MovieCard film={f} />
                </div>
              ))
            ) : (
              <p className="no-results text-white text-nowrap">
                Không tìm thấy kết quả nào
              </p>
            )}
          </div>
        )}

        {/* Hiển thị danh sách diễn viên */}
        {viewMode === "actors" &&
          (actors.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {actors.map((actor) => (
                <AvataCard actor={actor}></AvataCard>
              ))}
            </div>
          ) : (
            <p className="no-results text-white text-nowrap">
              Không tìm thấy kết quả nào
            </p>
          ))}
      </div>
    </Layout>
  );
}

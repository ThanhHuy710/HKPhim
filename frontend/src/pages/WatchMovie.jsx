import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import api from "../lib/axios";
import { toast } from "sonner";
import Layout from "../components/layout/Layout";
import MovieCard from "../components/MovieCard";
import VideoPlayer from "../components/VideoPlayer";
import SeasonAndEpisodes from "../components/SeasonAndEpisodes";
export default function WatchMovie() {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const episodeId = query.get("episode"); // ep.id
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchFilm();
    fetchFilms();
  }, [id, episodeId]);

  const fetchFilm = async () => {
    try {
      const res = await api.get(`/films/${id}`);
      setFilm(res.data.data || null);
    } catch (error) {
      console.error("Lỗi:", error);
      toast.error("Không thể tải phim");
    } finally {
      setLoading(false);
    }
  };
  const fetchFilms = async () => {
    try {
      const res = await api.get("/films");
      setFilms(res.data.data || []);
    } catch (error) {
      console.error("Lỗi:", error);
      toast.error("Không thể tải phim");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <Layout>
        <div className="loading-page">Đang tải...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="grid grid-cols-6 grid-rows-10 gap-4 text-white">
        <div className="col-span-4 row-span-4 min-h-[600px]">
          <VideoPlayer
            videoUrl={
              film.episodes.find((ep) => ep.id === Number(episodeId))?.video_url
            }
          ></VideoPlayer>
        </div>
        <div className="col-span-2 row-span-7 col-start-5 ">
          <h1 className="text-xs md:text-2xl">Phim dành cho bạn</h1>
          <div className="flex flex-wrap">
            {films.slice(0, 6).map((film) => (
              <div key={film.id} className="w-1/2 p-2">
                <MovieCard film={film} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 row-span-6 row-start-5">
          <div className="flex flex-col space-y-4 text-white">
            {/* Tên phim */}
            <h1 className="text-3xl font-bold">{film.title}</h1>

            {/*  */}
            <div className="flex flex-wrap gap-2">
              {film.film_genres.map((fg) => (
                <span
                  key={fg.genres.id}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                >
                  {fg.genres.name}
                </span>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Mô tả</h2>
              <p className="text-gray-300">{film.description}</p>
            </div>
            <div className="flex gap-6">
              <p>
                <span className="font-semibold">Quốc gia:</span> {film.country}
              </p>
              <p>
                <span className="font-semibold">Thời lượng:</span>{" "}
                {film.duration}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Diễn viên</h2>
              <p className="text-gray-300">{film.actor}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-6 col-start-3 row-start-5">
          {/* button */}
          <div className="flex flex-nowrap gap-8 justify-end mb-2">
            <Link className="flex flex-col items-center cursor-pointer hover:text-blue-400">
              <img
                src="../public/images/Comment.png"
                alt="Comment "
                className="w-6 h-6"
              />
              <p className="text-sm">Bình luận</p>
            </Link>
            <Link className="flex flex-col items-center cursor-pointer hover:text-blue-400">
              <img
                src="../public/images/AddToList.png"
                alt="Comment "
                className="w-6 h-6"
              />
              <p className="text-sm">Yêu thích</p>
            </Link>
            <Link className="flex flex-col items-center cursor-pointer hover:text-blue-400">
              <img
                src="../public/images/Share.png"
                alt="Comment "
                className="w-6 h-6"
              />
              <p className="text-sm">chia sẻ</p>
            </Link>
          </div>
          {/* button */}

          {/* Tập Phim */}
          <h1>Tập phim</h1>
          <hr className="border-t-2 border-gray-600 my-4 w-full" />

          {/* Tập Phim */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <img
                src="../public/images/SessionMovie.png"
                alt=""
                className="w-9 h-9"
              />
              <SeasonAndEpisodes film={film}></SeasonAndEpisodes>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

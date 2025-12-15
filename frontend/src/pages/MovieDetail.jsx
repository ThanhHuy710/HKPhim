import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../lib/axios";
import { toast } from "sonner";
import Layout from "../components/layout/Layout";
import MovieCard from "../components/MovieCard";
import SeasonAndEpisodes from "../components/SeasonAndEpisodes";
import FavoriteButton from "../components/FavoriteButton";
import { useAuth } from "../contexts/AuthContext";
export default function MovieDetail() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetchFilm();
    fetchFilms();
    window.scrollTo(0, 0);
  }, [id]);
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
  const getEmbedUrl = (url) => {
    // lấy VIDEO_ID từ link gốc
    const match = url.match(/v=([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
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
          {/*check films null or undefined*/}
          {films.poster_video_url !== null ? (
            <iframe
              width="100%"
              height="100%"
              src={getEmbedUrl(film.poster_video_url)}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onFocus={true}
            ></iframe>
          ) : (
            <img
              src="../../public/images/imgNotAvailable.png"
              alt=""
              className="w-full h-full"
            />
          )}
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

            {/* Nếu là phim bộ thì hiển thị phần */}

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
          <div className="flex flex-nowrap gap-8">
            <Link to={`/watch/${film.id}?episode=${film.episodes[0].id}`}>
              <button
                type="button"
                className="px-6 py-2.5 cursor-pointer text-white text-sm tracking-wider font-medium border-0 outline-0 outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700"
              >
                Xem Ngay
              </button>
            </Link>
            <Link className="flex flex-col items-center cursor-pointer hover:text-blue-400">
              <img
                src="../public/images/Comment.png"
                alt="Comment "
                className="w-6 h-6"
              />
              <p className="text-sm">Bình luận</p>
            </Link>
            {/* nút button  */}
            {user ? (
              <FavoriteButton filmId={film.id} userId={user.id} />
            ) : (
              <Link
              to="/auth"
              className="flex flex-col items-center cursor-pointer hover:text-blue-400">
                <img
                  src="../../public/images/AddToList.png"
                  alt="Favorite"
                  className="w-6 h-6"
                />
                <p className="text-sm">"Yêu thích"</p>
              </Link>
            )}

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
          <h1 className="mt-3">Tập phim</h1>
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

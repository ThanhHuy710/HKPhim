import { useEffect, useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import api from "../lib/axios";
import { toast } from "sonner";
import Layout from "../components/layout/Layout";
import MovieCard from "../components/MovieCard";
import VideoPlayer from "../components/VideoPlayer";
import SeasonAndEpisodes from "../components/SeasonAndEpisodes";
import { useAuth } from "../contexts/AuthContext";
import { canWatchFilm, parseAgeRating } from "../utils/ageVerification";
import { AlertCircle, Lock } from "lucide-react";
import FavoriteButton from "../components/FavoriteButton";

export default function WatchMovie() {
  const { id } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(search);
  const episodeId = query.get("episode"); // ep.id
  const { user, updateUser } = useAuth();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [ageVerified, setAgeVerified] = useState(false);
  const [ageError, setAgeError] = useState(null);
  const [subscriptionValid, setSubscriptionValid] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [accessGranted, setAccessGranted] = useState(false);

  // UseEffect chính - Kiểm tra tất cả theo thứ tự
  useEffect(() => {
    const checkAccessAndLoadFilm = async () => {
      setCheckingAccess(true);
      window.scrollTo(0, 0);
      // Phải đợi user context load xong trước
      if (user === undefined) {
        return; // Vẫn đang load user context
      }

      // Bước 1: Kiểm tra đăng nhập trước - chặn ngay lập tức
      if (!user) {
        setAgeError("Bạn cần đăng nhập để xem phim.");
        setAgeVerified(false);
        setSubscriptionValid(false);
        setCheckingAccess(false);
        setAccessGranted(false);
        toast.error("Vui lòng đăng nhập để xem phim!");
        setTimeout(() => {
          navigate("/auth");
        }, 2000);
        return;
      }

      // Bước 2: Kiểm tra gói cước
      const hasValidSubscription = await checkSubscription();
      if (!hasValidSubscription) {
        return; // Đã xử lý trong checkSubscription
      }

      // Bước 3: Tải dữ liệu phim (chỉ khi gói cước hợp lệ)
      // Phim sẽ được tải trong checkSubscription

      // Tải danh sách phim gợi ý
      fetchFilms();
    };

    checkAccessAndLoadFilm();
  }, [user, id, episodeId]);

  // Xác thực độ tuổi khi phim được tải
  useEffect(() => {
    if (film && user && subscriptionValid) {
      verifyAge();
    }
  }, [film, user?.birthday]);

  const checkSubscription = async () => {
    setCheckingAccess(true);

    try {
      // Kiểm tra xem user có gói cước hoạt động không
      if (!user.plan_id) {
        setAgeError("Bạn cần đăng ký gói cước để xem phim.");
        setAgeVerified(false);
        setSubscriptionValid(false);
        setCheckingAccess(false);
        setAccessGranted(false);
        toast.error("Bạn cần đăng ký gói cước để xem phim!");
        setTimeout(() => {
          navigate("/subscription");
        }, 2000);
        return false;
      }

      // Kiểm tra gói cước còn hạn không
      const res = await api.get(`/invoices?user_id=${user.id}`);
      const invoices = res.data.data || [];

      // Tìm hoá đơn hoạt động cho gói hiện tại
      const activeInvoice = invoices.find(
        (inv) =>
          inv.plan_id === user.plan_id &&
          inv.status === "completed" &&
          inv.end_date &&
          new Date(inv.end_date) > new Date()
      );

      if (!activeInvoice) {
        setAgeError(
          "Gói cước của bạn đã hết hạn. Vui lòng gia hạn để tiếp tục xem phim."
        );
        setAgeVerified(false);
        setSubscriptionValid(false);
        setCheckingAccess(false);
        setAccessGranted(false);
        toast.error("Gói cước của bạn đã hết hạn! Vui lòng gia hạn.");
        setTimeout(() => {
          navigate("/subscription");
        }, 2000);
        return false;
      }

      // Gói cước hợp lệ
      setSubscriptionValid(true);
      setCheckingAccess(false);

      // Bây giờ mới tải dữ liệu phim
      await fetchFilm();
      await fetchFilms();

      return true;
    } catch (error) {
      console.error("Lỗi kiểm tra gói cước:", error);
      setAgeError("Không thể kiểm tra gói cước. Vui lòng thử lại sau.");
      setAgeVerified(false);
      setSubscriptionValid(false);
      setCheckingAccess(false);
      setAccessGranted(false);
      toast.error("Không thể kiểm tra gói cước. Vui lòng thử lại!");
      return false;
    }
  };

  const verifyAge = () => {
    // Kiểm tra xem user đã có ngày sinh chưa
    if (!user.birthday) {
      setAgeError("Bạn cần cập nhật ngày sinh trong hồ sơ để có thể xem phim.");
      setAgeVerified(false);
      setAccessGranted(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
      return;
    }

    // Kiểm tra xem tuổi của user có đủ để xem phim này không
    if (!canWatchFilm(user.birthday, film.age_rating)) {
      const requiredAge = parseAgeRating(film.age_rating);
      setAgeError(
        `Phim này yêu cầu độ tuổi ${requiredAge}+. Bạn không đủ tuổi để xem nội dung này.`
      );
      setAgeVerified(false);
      setAccessGranted(false);
      toast.error(`Bạn phải từ ${requiredAge} tuổi trở lên để xem phim này!`);
      return;
    }

    // Tất cả kiểm tra đều pass - cho phép xem phim
    setAgeVerified(true);
    setAccessGranted(true);
    setAgeError(null);
  };

  const fetchFilm = async () => {
    try {
      const res = await api.get(`/films/${id}`);
      setFilm(res.data.data || null);
    } catch (error) {
      console.error("Lỗi:", error);
      toast.error("Không thể tải phim");
      // Nếu không thể tải phim, chuyển về trang chủ
      setTimeout(() => {
        navigate("/");
      }, 2000);
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
      // Không hiển thị lỗi cho danh sách phim gợi ý
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

  if (!film) {
    return (
      <Layout>
        <div className="loading-page">Không tìm thấy phim</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="grid grid-cols-6 auto-rows-min gap-4 text-white">
        <div className="col-span-4 row-span-4 h-full flex items-center justify-center">
          <div className="border-3 border-gray-600 rounded-lg opacity-75">
            {checkingAccess || !film ? (
              <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-gray-900 rounded-lg p-8">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 mx-auto mb-4"></div>
                  <p className="text-gray-400">
                    Đang kiểm tra quyền truy cập...
                  </p>
                </div>
              </div>
            ) : accessGranted && ageVerified && subscriptionValid && film ? (
              <VideoPlayer
                videoUrl={
                  film.episodes?.find((ep) => ep.id === Number(episodeId))
                    ?.video_url || film.episodes?.[0]?.video_url
                }
                filmId={film.id}
                currentViewCount={film.view_count}
              />
            ) : (
              <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-gray-900 rounded-lg p-8">
                <div className="text-center max-w-md">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-red-500/20 rounded-full">
                      <Lock size={48} className="text-red-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {!user
                      ? "Yêu cầu đăng nhập"
                      : !user.plan_id || !subscriptionValid
                      ? "Yêu cầu gói cước"
                      : "Nội dung bị giới hạn độ tuổi"}
                  </h3>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle
                        size={20}
                        className="text-red-500 shrink-0 mt-0.5"
                      />
                      <p className="text-red-400 text-sm text-left">
                        {ageError || "Quyền truy cập bị từ chối"}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">
                    {!user
                      ? "Vui lòng đăng nhập để truy cập nội dung."
                      : !user.plan_id || !subscriptionValid
                      ? "Đăng ký gói cước để xem không giới hạn."
                      : "Đây là biện pháp bảo vệ nội dung theo độ tuổi."}
                  </p>
                  <div className="flex gap-3 justify-center">
                    {!user ? (
                      <>
                        <button
                          onClick={() => navigate("/auth")}
                          className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-200"
                        >
                          Đăng nhập
                        </button>
                        <button
                          onClick={() => navigate("/")}
                          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200"
                        >
                          Quay về
                        </button>
                      </>
                    ) : !user.plan_id || !subscriptionValid ? (
                      <>
                        <button
                          onClick={() => navigate("/subscription")}
                          className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-200"
                        >
                          Xem gói cước
                        </button>
                        <button
                          onClick={() => navigate("/")}
                          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200"
                        >
                          Quay về
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => navigate("/")}
                        className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-200"
                      >
                        Quay về Trang chủ
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
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
            <div className="flex gap-3">
              <h2 className="text-xl font-semibold mb-2">
                Lượt xem: {film.view_count}
              </h2>
              <h2 className="text-xl font-semibold mb-2">
                Đánh giá trung bình: {film.average_rating}/10
              </h2>
            </div>

            {/* Tên phim */}
            <h1 className="text-3xl font-bold">{film.title}</h1>

            {/*  */}
            <div className="flex flex-wrap gap-2">
              {film.film_genres?.map((fg) => (
                <span
                  key={fg.genres?.id}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                >
                  {fg.genres?.name}
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
            <div>
              <h2 className="text-xl font-semibold mb-2">Đạo diễn</h2>
              <p className="text-gray-300">{film.directeur}</p>
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
            <FavoriteButton filmId={film.id} userId={user.id} />
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

import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../lib/axios";
import { toast } from "sonner";
import Layout from "../components/layout/Layout";
import MovieCard from "../components/MovieCard";
import SeasonAndEpisodes from "../components/SeasonAndEpisodes";
import RequireBirthdayModal from "../components/RequireBirthdayModal";
import { useAuth } from "../contexts/AuthContext";
import FavoriteButton from "../components/FavoriteButton";

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [showBirthdayModal, setShowBirthdayModal] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [accessError, setAccessError] = useState(null);

  // Kiểm tra quyền truy cập trước khi tải phim
  useEffect(() => {
    const checkAccess = async () => {
      setCheckingAccess(true);
      
      // Đợi user context load xong
      if (user === undefined) {
        return;
      }

      // Bước 1: Kiểm tra đăng nhập
      if (!user) {
        setAccessError('Vui lòng đăng nhập để xem thông tin phim.');
        setHasAccess(false);
        setCheckingAccess(false);
        toast.error('Vui lòng đăng nhập để xem phim!');
        setTimeout(() => {
          navigate('/auth');
        }, 2000);
        return;
      }

      // Bước 2: Kiểm tra có gói cước
      if (!user.plan_id) {
        setAccessError('Bạn cần đăng ký gói cước để xem phim.');
        setHasAccess(false);
        setCheckingAccess(false);
        toast.error('Bạn cần đăng ký gói cước để xem phim!');
        setTimeout(() => {
          navigate('/subscription');
        }, 2000);
        return;
      }

      // Bước 3: Kiểm tra gói cước còn hạn
      try {
        const res = await api.get(`/invoices?user_id=${user.id}`);
        const invoices = res.data.data || [];
        
        const activeInvoice = invoices.find(inv => 
          inv.plan_id === user.plan_id && 
          inv.status === 'completed' &&
          inv.end_date && 
          new Date(inv.end_date) > new Date()
        );

        if (!activeInvoice) {
          setAccessError('Gói cước của bạn đã hết hạn. Vui lòng gia hạn.');
          setHasAccess(false);
          setCheckingAccess(false);
          toast.error('Gói cước của bạn đã hết hạn! Vui lòng gia hạn.');
          setTimeout(() => {
            navigate('/subscription');
          }, 2000);
          return;
        }

        // Tất cả kiểm tra đều pass - cho phép truy cập
        setHasAccess(true);
        setAccessError(null);
        setCheckingAccess(false);
        
        // Chỉ tải phim khi đã có quyền truy cập
        fetchFilm();
        fetchFilms();
        
        // Kiểm tra birthday
        if (!user.birthday) {
          setShowBirthdayModal(true);
        }
      } catch (error) {
        console.error('Lỗi kiểm tra gói cước:', error);
        setAccessError('Không thể kiểm tra gói cước.');
        setHasAccess(false);
        setCheckingAccess(false);
        toast.error('Không thể kiểm tra gói cước. Vui lòng thử lại!');
      }
    };

    checkAccess();
  }, [user, id]);

  const handleBirthdayUpdate = (updatedUser) => {
    updateUser(updatedUser);
    setShowBirthdayModal(false);
  };

  const handleWatchClick = async (e) => {
    e.preventDefault();
    
    // Đã được kiểm tra ở useEffect, nên chỉ cần navigate
    if (hasAccess && film && film.episodes && film.episodes.length > 0) {
      navigate(`/watch/${film.id}?episode=${film.episodes[0].id}`);
    }
  };

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
  // Hiển thị loading khi đang kiểm tra quyền truy cập
  if (checkingAccess || loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 mx-auto mb-4"></div>
            <p className="text-gray-400">Đang kiểm tra quyền truy cập...</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Hiển thị lỗi nếu không có quyền truy cập
  if (!hasAccess) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <div className="mb-6">
              <div className="inline-block p-4 bg-red-500/20 rounded-full">
                <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Yêu cầu đăng nhập</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
              <p className="text-red-400 text-sm">
                {accessError || 'Bạn cần đăng nhập và có gói cước để xem phim.'}
              </p>
            </div>
            <div className="flex gap-3 justify-center">
              {!user ? (
                <button
                  onClick={() => navigate('/auth')}
                  className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-200"
                >
                  Đăng nhập
                </button>
              ) : (
                <button
                  onClick={() => navigate('/subscription')}
                  className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-200"
                >
                  Xem gói cước
                </button>
              )}
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200"
              >
                Quay về
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Hiển thị lỗi nếu không tìm thấy phim
  if (!film) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
          <p className="text-white text-lg">Không tìm thấy phim</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {showBirthdayModal && (
        <RequireBirthdayModal user={user} onUpdate={handleBirthdayUpdate} />
      )}
      
      <div className="grid grid-cols-6 grid-rows-10 gap-4 text-white">
        <div className="col-span-4 row-span-4 min-h-[600px]">
          {/**/}
          <iframe
            width="100%"
            height="100%"
            src={getEmbedUrl(film.poster_video_url)}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
          <div className="flex flex-nowrap gap-8">
            <button
              type="button"
              onClick={handleWatchClick}
              className="px-6 py-2.5 cursor-pointer text-white text-sm tracking-wider font-medium border-0 outline-0 outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700"
            >
              Xem Ngay
            </button>
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
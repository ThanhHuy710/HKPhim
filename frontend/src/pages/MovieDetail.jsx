import { useEffect, useState, useRef } from "react";
import { Trash2, RefreshCw, MoreHorizontal, Lock, AlertCircle } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../lib/axios";
import { toast } from "sonner";
import Layout from "../components/layout/Layout";
import MovieCard from "../components/MovieCard";
import SeasonAndEpisodes from "../components/SeasonAndEpisodes";
import RequireBirthdayModal from "../components/RequireBirthdayModal";
import { useAuth } from "../contexts/AuthContext";
import { canWatchFilm, parseAgeRating } from "../utils/ageVerification";
import FavoriteButton from "../components/FavoriteButton";

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const commentsRef = useRef(null);
  const commentInputRef = useRef(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [deleteModalId, setDeleteModalId] = useState(null);
  const [deleteInProgress, setDeleteInProgress] = useState(false);
  const [showBirthdayModal, setShowBirthdayModal] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [accessError, setAccessError] = useState(null);
  const [ageVerified, setAgeVerified] = useState(false);
  const [ageError, setAgeError] = useState(null);

  // Kiểm tra quyền truy cập trước khi tải phim
  useEffect(() => {
    const checkAccess = async () => {
      setCheckingAccess(true);
      window.scrollTo(0,0);
      // Đợi user context load xong
      if (user === undefined) {
        return;
      }

      // Bước 1: Kiểm tra đăng nhập
      if (!user) {
        setAccessError("Vui lòng đăng nhập để xem thông tin phim.");
        setHasAccess(false);
        setCheckingAccess(false);
        toast.error("Vui lòng đăng nhập để xem phim!");
        setTimeout(() => {
          navigate("/auth");
        }, 2000);
        return;
      }

      // Bước 2: Kiểm tra có gói cước
      if (!user.plan_id) {
        setAccessError("Bạn cần đăng ký gói cước để xem phim.");
        setHasAccess(false);
        setCheckingAccess(false);
        toast.error("Bạn cần đăng ký gói cước để xem phim!");
        setTimeout(() => {
          navigate("/subscription");
        }, 2000);
        return;
      }

      // Bước 3: Kiểm tra gói cước còn hạn
      try {
        const res = await api.get(`/invoices?user_id=${user.id}`);
        const invoices = res.data.data || [];

        const activeInvoice = invoices.find(
          (inv) =>
            inv.plan_id === user.plan_id &&
            inv.status === "completed" &&
            inv.end_date &&
            new Date(inv.end_date) > new Date()
        );

        if (!activeInvoice) {
          setAccessError("Gói cước của bạn đã hết hạn. Vui lòng gia hạn.");
          setHasAccess(false);
          setCheckingAccess(false);
          toast.error("Gói cước của bạn đã hết hạn! Vui lòng gia hạn.");
          setTimeout(() => {
            navigate("/subscription");
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
        console.error("Lỗi kiểm tra gói cước:", error);
        setAccessError("Không thể kiểm tra gói cước.");
        setHasAccess(false);
        setCheckingAccess(false);
        toast.error("Không thể kiểm tra gói cước. Vui lòng thử lại!");
      }
    };

    checkAccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, id]);

  const handleBirthdayUpdate = (updatedUser) => {
    updateUser(updatedUser);
    setShowBirthdayModal(false);
  };

  // Xác thực độ tuổi khi phim được tải và user có birthday
  useEffect(() => {
    if (film && user && user.birthday && hasAccess) {
      verifyAge();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [film, user?.birthday, hasAccess]);

  const verifyAge = () => {
    // Kiểm tra xem tuổi của user có đủ để xem phim này không
    if (!canWatchFilm(user.birthday, film.age_rating)) {
      const requiredAge = parseAgeRating(film.age_rating);
      setAgeError(`Phim này yêu cầu độ tuổi ${requiredAge}+. Bạn không đủ tuổi để xem nội dung này.`);
      setAgeVerified(false);
      toast.error(`Bạn phải từ ${requiredAge} tuổi trở lên để xem phim này!`);
      return;
    }

    // Tất cả kiểm tra đều pass - cho phép xem phim
    setAgeVerified(true);
    setAgeError(null);
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
      // Verify age after film is loaded
      if (user && user.birthday && hasAccess) {
        verifyAge();
      }
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
  const fetchComments = async () => {
    try {
      // fetch all feedbacks (comments + reviews) for this film
      const res = await api.get(`/feedbacks?film_id=${id}`);
      setComments(res.data.data || []);
    } catch (error) {
      console.error("Lỗi khi tải bình luận:", error);
    }
  };

  const handleDeleteFeedback = (feedbackId) => {
    // open confirmation modal
    setDeleteModalId(feedbackId);
  };

  const confirmDeleteFeedback = async () => {
    if (!deleteModalId) return;
    setDeleteInProgress(true);
    try {
      await api.delete(`/feedbacks/${deleteModalId}`);
      setComments(prev => prev.filter(c => c.id !== deleteModalId));
      toast.success('Xóa bình luận thành công');
      setDeleteModalId(null);
    } catch (error) {
      console.error('Lỗi xóa bình luận:', error);
      toast.error('Xóa bình luận thất bại');
    } finally {
      setDeleteInProgress(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
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
                <svg
                  className="w-16 h-16 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Yêu cầu đăng nhập
            </h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
              <p className="text-red-400 text-sm">
                {accessError || "Bạn cần đăng nhập và có gói cước để xem phim."}
              </p>
            </div>
            <div className="flex gap-3 justify-center">
              {!user ? (
                <button
                  onClick={() => navigate("/auth")}
                  className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-200"
                >
                  Đăng nhập
                </button>
              ) : (
                <button
                  onClick={() => navigate("/subscription")}
                  className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-200"
                >
                  Xem gói cước
                </button>
              )}
              <button
                onClick={() => navigate("/")}
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
        <div className="col-span-4 row-span-4">
          {ageVerified ? (
            <iframe
              src={getEmbedUrl(film.poster_video_url)}
              title="YouTube video"
              className="w-full h-[280px] md:h-[520px] lg:h-[640px] rounded-md bg-black"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
                  Nội dung bị giới hạn độ tuổi
                </h3>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                    <p className="text-red-400 text-sm text-left">
                      {ageError || 'Quyền truy cập bị từ chối'}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Đây là biện pháp bảo vệ nội dung theo độ tuổi.
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => navigate('/')}
                    className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-200"
                  >
                    Quay về Trang chủ
                  </button>
                </div>
              </div>
            </div>
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
            <div className="flex gap-3">
                <h2 className="text-xl font-semibold mb-2">Lượt xem: {film.view_count}</h2>
                <h2 className="text-xl font-semibold mb-2">Đánh giá trung bình: {film.average_rating}/10</h2>
            </div>

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
            <button
              type="button"
              onClick={() => {
                  if (commentsRef.current) {
                    // use scrollIntoView so CSS `scroll-margin-top` is respected
                    commentsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                  // focus shortly after scroll starts
                  setTimeout(() => commentInputRef.current?.focus(), 400);
                }}
              className="flex flex-col items-center cursor-pointer hover:text-blue-400 transition-transform active:scale-95"
            >
              <img
                src="../public/images/Comment.png"
                alt="Comment "
                className="w-6 h-6"
              />
              <p className="text-sm">Bình luận</p>
            </button>
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
      
      {/* Comments Section - moved below entire layout to avoid overlap */}
      <div id="comments" ref={commentsRef} className="mt-6 max-w-4xl mx-auto text-white scroll-offset-target">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center">💬</span>
              Bình luận <span className="text-gray-400 text-sm">({comments.length})</span>
            </h2>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            {[...Array(10)].map((_, i) => {
              const val = i + 1;
              const filled = hoverRating ? val <= hoverRating : val <= rating;
              return (
                <button key={val} onMouseEnter={() => setHoverRating(val)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(val)} className="p-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? '#F59E0B' : 'none'} stroke="#F59E0B" strokeWidth="1.5" className="inline-block">
                    <path d="M12 .587l3.668 7.431L24 9.748l-6 5.857L19.335 24 12 20.201 4.665 24 6 15.605 0 9.748l8.332-1.73z" />
                  </svg>
                </button>
              );
            })}
            <div className="text-sm text-gray-300 ml-3">{rating}/10</div>
          </div>

          <div className="relative">
            <textarea
              ref={commentInputRef}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Viết bình luận"
              className="w-full p-4 rounded-lg bg-gray-800 text-white min-h-[120px] resize-none"
              maxLength={1000}
            />
            <div className="absolute right-4 top-4 text-gray-400 text-xs">{commentText.length}/1000</div>
          </div>

          <div className="flex items-center justify-end mt-3">
            <div className="flex items-center gap-3">
              <button onClick={async () => {
                if (!user) { navigate('/auth'); return; }
                if (!commentText.trim() && rating === 0) return;
                try {
                  const payload = { film_id: Number(id) };
                  if (commentText.trim()) payload.comment = commentText.trim();
                  if (rating > 0) payload.rating = rating;
                  payload.user_id = user.id;
                  const res = await api.post('/feedbacks', payload);
                  setComments(prev => [res.data.data, ...prev]);
                  setCommentText('');
                  setRating(0);
                } catch (error) {
                  console.error('Lỗi gửi bình luận/đánh giá:', error);
                  toast.error('Gửi bình luận thất bại');
                }
              }} className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md">
                <span>Gửi</span>
                
              
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-gray-400">Chưa có bình luận nào.</p>
          ) : (
            comments.map((c) => (
              <div key={c.id} className="flex gap-4 p-4 bg-gray-900 rounded-lg">
                <div className="w-12">
                  <img src={c.users?.avatar || '/images/default-avatar.png'} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <div className="font-semibold">{c.users?.fullname || c.users?.username || 'Người dùng'}</div>
                      {c.rating ? (
                        <div className="flex items-center gap-1 text-sm text-yellow-400">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1"><path d="M12 .587l3.668 7.431L24 9.748l-6 5.857L19.335 24 12 20.201 4.665 24 6 15.605 0 9.748l8.332-1.73z"/></svg>
                          <span className="text-xs text-gray-200">{c.rating}/10</span>
                        </div>
                      ) : null}
                      <div className="text-xs text-gray-400">{new Date(c.created_at).toLocaleString('vi-VN')}</div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <button title="Làm mới" className="rounded-full bg-gray-800 w-8 h-8 flex items-center justify-center"><RefreshCw size={14} /></button>
                      <button title="Tùy chọn" className="rounded-full bg-gray-800 w-8 h-8 flex items-center justify-center"><MoreHorizontal size={14} /></button>
                      { (c.users?.id === user?.id || c.user_id === user?.id) && (
                        <button title="Xóa" onClick={() => handleDeleteFeedback(c.id)} className="rounded-full bg-red-700 hover:bg-red-600 w-8 h-8 flex items-center justify-center">
                          <Trash2 size={14} />
                        </button>
                      ) }
                    </div>
                  </div>
                  <div className="text-gray-200">{c.comment}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {deleteModalId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => { if(!deleteInProgress) setDeleteModalId(null); }} />
          <div className="bg-gray-900 text-white rounded-lg p-6 z-10 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-2">Xác nhận xóa bình luận</h3>
            <p className="text-sm text-gray-300 mb-4">Bạn có chắc muốn xóa bình luận này? Hành động này không thể hoàn tác.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteModalId(null)} disabled={deleteInProgress} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">Hủy</button>
              <button onClick={confirmDeleteFeedback} disabled={deleteInProgress} className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded text-white">
                {deleteInProgress ? 'Đang xóa...' : 'Xóa'}
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

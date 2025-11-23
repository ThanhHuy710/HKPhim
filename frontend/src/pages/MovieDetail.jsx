import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Star, Clock, Calendar, Globe } from "lucide-react";
import api from "../lib/axios";
import VideoPlayer from "../components/VideoPlayer";
import Layout from "../components/layout/Layout";

export default function MovieDetail() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        // TODO: Backend cần trả về thêm:
        // - episodes array nếu is_series = true
        // - related_films array (phim cùng thể loại hoặc quốc gia)
        // - feedbacks/comments array
        const res = await api.get(`/tasks/${id}`);
        setFilm(res.data.film);
        
        // TODO: Nếu backend chưa có, cần thêm API:
        // GET /api/films/:id/episodes - Lấy danh sách tập phim
        if (res.data.episodes) {
          setEpisodes(res.data.episodes);
          setSelectedEpisode(res.data.episodes[0]);
        }
      } catch (error) {
        toast.error("Không thể tải thông tin phim");
      } finally {
        setLoading(false);
      }
    };

    fetchFilm();
  }, [id]);

  if (loading) return <Layout><div className="loading">Đang tải...</div></Layout>;
  if (!film) return <Layout><div>Không tìm thấy phim</div></Layout>;

  return (
    <Layout>
      <div className="movie-detail">
        {/* Video Player */}
        <div className="video-section">
          <VideoPlayer 
            videoUrl={selectedEpisode?.video_url || film.poster_video_url}
            subtitleUrl={selectedEpisode?.sub_url}
          />
        </div>

        {/* Episodes */}
        {episodes.length > 0 && (
          <div className="episodes-section">
            <h3>Danh sách tập</h3>
            <div className="episodes-grid">
              {episodes.map(ep => (
                <button
                  key={ep.id}
                  className={`episode-btn ${selectedEpisode?.id === ep.id ? 'active' : ''}`}
                  onClick={() => setSelectedEpisode(ep)}
                >
                  {ep.episode_name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Movie Info */}
        <div className="movie-info-detail">
          <h1>{film.title}</h1>
          
          <div className="movie-stats">
            <span className="rating">
              <Star fill="gold" color="gold" size={20} />
              {film.average_rating || 0}
            </span>
            <span><Clock size={16} /> {film.duration}</span>
            <span><Calendar size={16} /> {film.year}</span>
            <span><Globe size={16} /> {film.country}</span>
          </div>

          <div className="movie-description">
            <h3>Mô tả</h3>
            <p>{film.description}</p>
          </div>

          <div className="movie-meta-info">
            <p><strong>Đạo diễn:</strong> {film.directeur}</p>
            <p><strong>Diễn viên:</strong> {film.actor}</p>
            <p><strong>Độ tuổi:</strong> {film.age_rating}</p>
          </div>
        </div>

        {/* TODO: Thêm các sections sau:
          - Phim liên quan (related films)
          - Comments/Feedbacks section (cần API: GET /api/films/:id/feedbacks, POST /api/feedbacks)
          - Thêm vào yêu thích button (POST /api/favorites)
        */}
      </div>
    </Layout>
  );
}

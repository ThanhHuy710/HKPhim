import { Link } from "react-router";
import { Play, Star, Eye } from "lucide-react";
import { formatViews } from "../utils/helpers";

export default function MovieCard({ film }) {
  return (
    <Link to={`/phim/${film.id}`} className="movie-card">
      <div className="movie-poster">
        <img 
          src={film.poster_url || '/placeholder.jpg'} 
          alt={film.title}
          loading="lazy"
        />
        <div className="movie-overlay">
          <Play size={48} className="play-icon" />
        </div>
        {film.is_series && (
          <span className="badge">Phim bộ</span>
        )}
        {/* TODO: Thêm badge chất lượng (HD, CAM, etc.) nếu có field quality trong database */}
        {film.view_count > 0 && (
          <span className="views-badge">
            <Eye size={12} />
            {formatViews(film.view_count)} views
          </span>
        )}
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{film.title}</h3>
        <div className="movie-meta">
          <span>{film.year}</span>
          <span className="rating">
            <Star size={14} fill="gold" color="gold" />
            {film.average_rating || 0}
          </span>
        </div>
      </div>
    </Link>
  );
}

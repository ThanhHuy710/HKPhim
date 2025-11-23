import { Link } from "react-router";
import { ChevronRight, Eye } from "lucide-react";
import { useRef } from "react";
import { formatViews } from "../utils/helpers";

export default function MovieRow({ title, films, viewAllLink }) {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="movie-row">
      <div className="movie-row-header">
        <h2 className="movie-row-title">{title}</h2>
        {viewAllLink && (
          <Link to={viewAllLink} className="movie-row-link">
            Xem tất cả <ChevronRight size={16} />
          </Link>
        )}
      </div>

      <div className="movie-row-container">
        <button 
          className="movie-row-arrow movie-row-arrow-left"
          onClick={() => scroll("left")}
        >
          ‹
        </button>

        <div className="movie-row-content" ref={rowRef}>
          {films && films.length > 0 ? (
            films.map((film) => (
              <Link 
                key={film.id} 
                to={`/phim/${film.id}`}
                className="movie-row-item"
              >
                <div className="movie-row-poster">
                  {/* TODO: Thay placeholder bằng film.poster_url từ API */}
                  <img 
                    src={film.poster_url || "https://via.placeholder.com/200x300?text=No+Image"} 
                    alt={film.title}
                    loading="lazy"
                  />
                  
                  {/* Overlay with play icon */}
                  <div className="movie-row-overlay">
                    <div className="play-icon">▶</div>
                  </div>

                  {/* Badges */}
                  <div className="movie-badges">
                    {/* TODO: Kiểm tra field audio_type từ API */}
                    <span className="badge badge-audio">Lồng tiếng</span>
                    {film.is_series && (
                      <span className="badge badge-series">Phim bộ</span>
                    )}
                  </div>

                  {/* View count */}
                  {film.view_count > 0 && (
                    <div className="movie-views">
                      <Eye size={14} />
                      <span>{formatViews(film.view_count)}</span>
                    </div>
                  )}
                </div>

                <div className="movie-row-info">
                  <h3 className="movie-row-name">{film.title}</h3>
                  <p className="movie-row-meta">
                    {film.year} {film.country && `• ${film.country}`}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="movie-row-empty">Không có phim</p>
          )}
        </div>

        <button 
          className="movie-row-arrow movie-row-arrow-right"
          onClick={() => scroll("right")}
        >
          ›
        </button>
      </div>
    </section>
  );
}

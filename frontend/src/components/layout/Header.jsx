import { Link } from "react-router";
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import { GENRES, COUNTRIES } from "../../utils/constants";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showGenres, setShowGenres] = useState(false);
  const [showCountries, setShowCountries] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="header">
      <div className="header-wrapper">
        {/* Logo */}
        <Link to="/" className="header-logo">
          {/* TODO: Thay thế bằng logo thực tế - có thể là <img src="/logo.png" /> */}
          <span className="logo-text">HKphim</span>
        </Link>

        {/* Navigation Menu */}
        <nav className="header-nav">
          <Link to="/phim-moi" className="nav-link">Phim mới</Link>
          <Link to="/phim-bo" className="nav-link">Phim bộ</Link>
          <Link to="/phim-le" className="nav-link">Phim lẻ</Link>
          
          {/* Thể loại Dropdown */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setShowGenres(true)}
            onMouseLeave={() => setShowGenres(false)}
          >
            <button className="nav-link nav-link-dropdown">
              Thể loại <ChevronDown size={14} />
            </button>
            {showGenres && (
              <div className="dropdown-menu">
                {/* TODO: Lấy từ API - GET /api/genres để lấy danh sách đầy đủ */}
                {GENRES.map((genre, index) => (
                  <Link 
                    key={index}
                    to={`/the-loai/${genre.toLowerCase().replace(/\s+/g, '-')}`}
                    className="dropdown-item"
                  >
                    {genre}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Quốc gia Dropdown */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setShowCountries(true)}
            onMouseLeave={() => setShowCountries(false)}
          >
            <button className="nav-link nav-link-dropdown">
              Quốc gia <ChevronDown size={14} />
            </button>
            {showCountries && (
              <div className="dropdown-menu">
                {/* TODO: Có thể lấy từ API hoặc dùng constants như hiện tại */}
                {COUNTRIES.map((country, index) => (
                  <Link 
                    key={index}
                    to={`/quoc-gia/${country.toLowerCase().replace(/\s+/g, '-')}`}
                    className="dropdown-item"
                  >
                    {country}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="header-search">
          <input
            type="text"
            placeholder="Tìm kiếm phim..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <Search size={18} />
          </button>
        </form>

        {/* Login Button */}
        <Link to="/login" className="login-btn">
          Đăng nhập
        </Link>
      </div>
    </header>
  );
}

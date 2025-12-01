import { Link } from "react-router";
import { Search, ChevronDown } from "lucide-react";

export default function Header() {
  return (
<<<<<<< HEAD
    <header className="bg-black-dark text-black-pale shadow-md">
      <div className="max-w-[1440px] px-4 py-3 flex items-center">
        {/* Logo */}
        <Link to="/" className="">
          <img
            src="../../../public/images/Logo.png"
            alt="HKphim Logo"
            className="h-12 w-12"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 ml-12 flex-1 ">
          <Link to="/phim-moi" className="hover:text-white">
            Phim mới
          </Link>
          <Link to="/phim-bo" className="hover:text-white">
            Phim bộ
          </Link>
          <Link to="/phim-le" className="hover:text-white">
            Phim lẻ
          </Link>

          {/* Dropdown Thể loại chưa làm*/}
          <div className="relative">
            <button className="flex items-center hover:text-yellow-400">
              Thể loại <ChevronDown size={14} className="ml-1" />
            </button>
          </div>

          {/* Dropdown Quốc gia chưa làm*/}
          <div className="relative">
            <button className="flex items-center hover:text-yellow-400">
              Quốc gia <ChevronDown size={14} className="ml-1" />
            </button>
=======
    <header className="bg-black text-white shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 py-3 flex items-center">
        {/* Logo */}
        <Link to="/" className="">
          <img src="../../../public/images/Logo.png" alt="HKphim Logo" className="h-12 w-12" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 ml-12 flex-1">
          <Link to="/phim-moi" className="hover:text-yellow-400">Phim mới</Link>
          <Link to="/phim-bo" className="hover:text-yellow-400">Phim bộ</Link>
          <Link to="/phim-le" className="hover:text-yellow-400">Phim lẻ</Link>

          {/* Dropdown Thể loại chưa làm*/}
          <div
            className="relative"
            onMouseEnter={() => setShowGenres(true)}
            onMouseLeave={() => setShowGenres(false)}
          >
            <button className="flex items-center hover:text-yellow-400">
              Thể loại <ChevronDown size={14} className="ml-1" />
            </button>
            {showGenres && (
              <div className="absolute mt-2 bg-gray-800 rounded shadow-lg p-2">
                {GENRES.map((genre, i) => (
                  <Link
                    key={i}
                    to={`/the-loai/${genre.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-3 py-1 hover:bg-gray-700 rounded"
                  >
                    {genre}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown Quốc gia chưa làm*/}
          <div
            className="relative"
            onMouseEnter={() => setShowCountries(true)}
            onMouseLeave={() => setShowCountries(false)}
          >
            <button className="flex items-center hover:text-yellow-400">
              Quốc gia <ChevronDown size={14} className="ml-1" />
            </button>
            {showCountries && (
              <div className="absolute mt-2 bg-gray-800 rounded shadow-lg p-2">
                {COUNTRIES.map((country, i) => (
                  <Link
                    key={i}
                    to={`/quoc-gia/${country.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-3 py-1 hover:bg-gray-700 rounded"
                  >
                    {country}
                  </Link>
                ))}
              </div>
            )}
>>>>>>> 0345a8637dbc548c9c823a3dcf008ecc6c4a24b3
          </div>
        </nav>

        {/* Search */}
<<<<<<< HEAD
        <form className="flex items-center bg-gray-600 rounded px-2 py-1 mr-10 w-1/4 h-10 ml-auto">
=======
        <form onSubmit={handleSearch} className="flex items-center bg-gray-600 rounded px-2 py-1 mr-10 ml-5 w-1/4 h-10">
>>>>>>> 0345a8637dbc548c9c823a3dcf008ecc6c4a24b3
          <button type="submit" className="mr-4 hover:text-white">
            <Search size={18} />
          </button>
          <input
            type="text"
            placeholder="Tìm kiếm phim..."
<<<<<<< HEAD
=======
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
>>>>>>> 0345a8637dbc548c9c823a3dcf008ecc6c4a24b3
            className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
          />
        </form>

        {/* Login */}
        <Link
          to="/login"
<<<<<<< HEAD
          className="md-ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 font-semibold "
=======
          className="ml-4 px-4 py-2 bg-red-600 text-white-900 rounded hover:bg-red-800 font-semibold "
>>>>>>> 0345a8637dbc548c9c823a3dcf008ecc6c4a24b3
        >
          Đăng nhập
        </Link>
      </div>
    </header>
  );
}

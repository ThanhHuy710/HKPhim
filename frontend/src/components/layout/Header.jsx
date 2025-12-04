import { Link } from "react-router";
import { Search, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import api from "../../lib/axios";

export default function Header() {
  const [openGenre, setOpenGenre] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchGenres = async () => {
    try {
      const res = await api.get("/genres");
      setGenres(res.data.data || []);
    } catch (error) {
      console.error("Lỗi:", error);
      toast.error("Không thể tải phim");
    } 
  };
    fetchGenres();
  }, [openGenre]);
  useEffect(() => {
    const fetchGenres = async () => {
    try {
      const res = await api.get("/genres");
      setGenres(res.data.data || []);
    } catch (error) {
      console.error("Lỗi:", error);
      toast.error("Không thể tải phim");
    } 
  };
    fetchGenres();
  }, [openGenre]);
  return (
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
          <Link to="/search/series" className="hover:text-white">
            Phim bộ
          </Link>
          <Link to="/search/single-movies" className="hover:text-white">
            Phim lẻ
          </Link>

          {/* Dropdown Thể loại*/}
          <div className="relative">
            <button
              onClick={() => setOpenGenre(!openGenre)}
              className="flex items-center hover:text-yellow-400"
            >
              Thể loại <ChevronDown size={14} className="ml-1" />
            </button>
            {openGenre && (
              <div className="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded shadow-lg">
                {genres.map((genre) => (

                  <Link
                  to={`/search/genre/?name=${genre.name}`}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  {genre.name}
                </Link>
                  ))
                }
              </div>
            )}
          </div>

          {/* Dropdown Quốc gia*/}
          <div className="relative">
            <button
              onClick={() => setOpenCountry(!openCountry)}
              className="flex items-center hover:text-yellow-400"
            >
              Quốc gia <ChevronDown size={14} className="ml-1" />
            </button>
            {openCountry && (
              <div className="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded shadow-lg">
                <Link
                  to="/search/vietnam"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Việt Nam
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Search */}
        <form
          action="/search"
          className="flex items-center bg-gray-600 rounded px-2 py-1 mr-10 w-1/4 h-10 ml-auto"
        >
          <button type="submit" className="mr-4 hover:text-white">
            <Search size={18} />
          </button>
          <input
            type="text"
            placeholder="Tìm kiếm phim..."
            className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
          />
        </form>

        {/* Login */}
        <Link
          to="/login"
          className="md-ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 font-semibold "
        >
          Đăng nhập
        </Link>
      </div>
    </header>
  );
}

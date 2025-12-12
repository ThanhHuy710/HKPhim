import { useEffect, useState } from "react";
import { Plus, Search, Edit, Trash2, Eye, X, Upload, Film } from "lucide-react";
import api from "../../lib/axios";
import { toast } from "sonner";

export default function FilmsManagement() {
  const [films, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingFilm, setEditingFilm] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    age_rating: "",
    country: "",
    duration: "",
    poster_url: "",
    poster_video_url: "",
    directeur: "",
    actor: "",
    is_series: false,
    season: 0,
    premiere_date: "",
    video_url: "",
    selected_genres: [],
  });

  useEffect(() => {
    fetchFilms();
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const res = await api.get("/genres");
      setGenres(res.data.data || []);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchFilms = async () => {
    try {
      const res = await api.get("/films");
      const filmsData = res.data.data || [];
      setFilms(filmsData);
      
      // Trích xuất danh sách đạo diễn và diễn viên duy nhất
      const uniqueDirectors = [...new Set(
        filmsData
          .map(f => f.directeur)
          .filter(d => d && d.trim() !== "")
      )].sort();
      
      const uniqueActors = [...new Set(
        filmsData
          .map(f => f.actor)
          .filter(a => a && a.trim() !== "")
          .flatMap(a => a.split(',').map(actor => actor.trim()))
      )].sort();
      
      setDirectors(uniqueDirectors);
      setActors(uniqueActors);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Không thể tải danh sách phim");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Bạn có chắc muốn xóa phim này?")) return;
    
    try {
      await api.delete(`/films/${id}`);
      toast.success("Xóa phim thành công");
      fetchFilms();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Không thể xóa phim");
    }
  };

  const handleOpenModal = (film = null) => {
    if (film) {
      setEditingFilm(film);
      setFormData({
        title: film.title || "",
        description: film.description || "",
        age_rating: film.age_rating || "",
        country: film.country || "",
        duration: film.duration || "",
        poster_url: film.poster_url || "",
        poster_video_url: film.poster_video_url || "",
        directeur: film.directeur || "",
        actor: film.actor || "",
        is_series: film.is_series || false,
        season: film.season || 0,
        premiere_date: film.created_at ? film.created_at.split('T')[0] : "",
        video_url: film.episodes?.[0]?.video_url || "",
        selected_genres: film.film_genres?.map(fg => fg.genres_id) || [],
      });
    } else {
      setEditingFilm(null);
      setFormData({
        title: "",
        description: "",
        age_rating: "",
        country: "",
        duration: "",
        poster_url: "",
        poster_video_url: "",
        directeur: "",
        actor: "",
        is_series: false,
        season: 0,
        premiere_date: "",
        video_url: "",
        selected_genres: [],
      });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = {
        title: formData.title,
        description: formData.description,
        age_rating: formData.age_rating,
        country: formData.country,
        duration: formData.duration,
        poster_url: formData.poster_url,
        poster_video_url: formData.poster_video_url,
        directeur: formData.directeur,
        actor: formData.actor,
        is_series: formData.is_series,
        season: parseInt(formData.season) || 0,
      };

      if (editingFilm) {
        await api.patch(`/films/${editingFilm.id}`, submitData);
        
        // Cập nhật film_genres nếu cần
        if (formData.selected_genres.length > 0) {
          // Xóa film_genres hiện tại
          await api.delete(`/film-genres/film/${editingFilm.id}`);
          
          // Thêm film_genres mới
          for (const genreId of formData.selected_genres) {
            await api.post(`/film-genres`, {
              film_id: editingFilm.id,
              genres_id: genreId
            });
          }
        }

        // Cập nhật video_url trong tập đầu tiên nếu có
        if (formData.video_url && editingFilm.episodes?.[0]) {
          await api.patch(`/episodes/${editingFilm.episodes[0].id}`, {
            video_url: formData.video_url
          });
        }
        
        toast.success("Cập nhật phim thành công");
      } else {
        const filmRes = await api.post("/films", submitData);
        const newFilmId = filmRes.data.data.id;
        
        // Thêm film_genres
        if (formData.selected_genres.length > 0) {
          for (const genreId of formData.selected_genres) {
            await api.post(`/film-genres`, {
              film_id: newFilmId,
              genres_id: genreId
            });
          }
        }

        // Tạo tập đầu tiên với video_url nếu có
        if (formData.video_url) {
          await api.post("/episodes", {
            film_id: newFilmId,
            episode_name: "Tập 1",
            video_url: formData.video_url
          });
        }
        
        toast.success("Thêm phim mới thành công");
      }
      
      setShowModal(false);
      fetchFilms();
    } catch (error) {
      console.error("Error:", error);
      toast.error(editingFilm ? "Không thể cập nhật phim" : "Không thể thêm phim");
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleGenreToggle = (genreId) => {
    setFormData(prev => ({
      ...prev,
      selected_genres: prev.selected_genres.includes(genreId)
        ? prev.selected_genres.filter(id => id !== genreId)
        : [...prev.selected_genres, genreId]
    }));
  };

  const filteredFilms = films.filter(film =>
    film.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Quản lý phim</h1>
          <p className="text-gray-400 text-sm mt-1">Tổng cộng {films.length}</p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-semibold"
        >
          <Plus size={20} />
          Thêm phim
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm phim..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-pink-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 text-sm bg-gray-750 border-b border-gray-700">
                <th className="p-4">ID</th>
                <th className="p-4">Poster</th>
                <th className="p-4">Tiêu đề</th>
                <th className="p-4">Loại phim</th>
                <th className="p-4">Ngày tạo</th>
                <th className="p-4">Lượt xem</th>
                <th className="p-4">Đánh giá</th>
                <th className="p-4 text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredFilms.map((film) => (
                <tr key={film.id} className="border-b border-gray-700 hover:bg-gray-750 transition-colors">
                  <td className="p-4 text-white">{film.id}</td>
                  <td className="p-4">
                    <img
                      src={film.poster_url}
                      alt={film.title}
                      className="w-12 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-4 text-white font-medium">{film.title}</td>
                  <td className="p-4 text-gray-400">
                    {film.is_series ? "Phim bộ" : "Phim lẻ"}
                  </td>
                  <td className="p-4 text-gray-400">
                    {film.created_at ? film.created_at.replace('T', ' ').split('.')[0] : "N/A"}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Eye size={16} />
                      <span>{film.view_count || 0}</span>
                    </div>
                  </td>
                  <td className="p-4 text-yellow-500">
                    ★ {film.average_rating || "0.0"}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleOpenModal(film)}
                        className="p-2 bg-blue-500/20 text-blue-500 rounded hover:bg-blue-500/30 transition-colors"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(film.id)}
                        className="p-2 bg-red-500/20 text-red-500 rounded hover:bg-red-500/30 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredFilms.length === 0 && (
          <div className="p-8 text-center text-gray-400">
            Không tìm thấy phim nào
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-gray-800 rounded-lg w-full max-w-4xl my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">
                {editingFilm ? "Chỉnh sửa phim" : "Thêm phim mới"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Row 1: Title, Age */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Tiêu đề</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Độ tuổi</label>
                  <input
                    type="text"
                    name="age_rating"
                    value={formData.age_rating}
                    onChange={handleInputChange}
                    placeholder="13+, 16+, 18+"
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Description */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm">Mô tả</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none resize-none"
                />
              </div>

              {/* Row 3: Genre, Running time, Premiere date */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Thể loại (chọn nhiều)</label>
                  <div className="relative">
                    <div className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 max-h-32 overflow-y-auto">
                      {genres.length === 0 ? (
                        <p className="text-gray-400 text-sm">Đang tải...</p>
                      ) : (
                        <div className="space-y-2">
                          {genres.map(genre => (
                            <label key={genre.id} className="flex items-center gap-2 cursor-pointer hover:bg-gray-600 p-1 rounded">
                              <input
                                type="checkbox"
                                checked={formData.selected_genres.includes(genre.id)}
                                onChange={() => handleGenreToggle(genre.id)}
                                className="w-4 h-4 text-pink-500 bg-gray-600 border-gray-500 rounded focus:ring-pink-500"
                              />
                              <span className="text-sm">{genre.name}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Thời lượng</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    placeholder="VD: 120 phút"
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Ngày tạo</label>
                  <input
                    type="date"
                    name="premiere_date"
                    value={formData.premiere_date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 4: Cover & Background */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Upload cover (240x340)</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="poster_url"
                      value={formData.poster_url}
                      onChange={handleInputChange}
                      placeholder="URL ảnh poster"
                      className="w-full px-4 py-3 pr-12 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Upload size={20} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Link to the background (1920x1280)</label>
                  <input
                    type="text"
                    name="poster_video_url"
                    value={formData.poster_video_url}
                    onChange={handleInputChange}
                    placeholder="URL ảnh nền"
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 5: Country */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-3">
                  <label className="block text-gray-300 mb-2 text-sm">Quốc gia</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none"
                  >
                    <option value="">Chọn quốc gia</option>
                    <option value="Hoa Kỳ">Hoa Kỳ</option>
                    <option value="Hàn Quốc">Hàn Quốc</option>
                    <option value="Nhật Bản">Nhật Bản</option>
                    <option value="Trung Quốc">Trung Quốc</option>
                    <option value="Việt Nam">Việt Nam</option>
                    <option value="Thái Lan">Thái Lan</option>
                    <option value="Anh">Anh</option>
                    <option value="Pháp">Pháp</option>
                    <option value="Ấn Độ">Ấn Độ</option>
                  </select>
                </div>
              </div>

              {/* Row 6: Director & Actors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Đạo diễn</label>
                  <input
                    type="text"
                    name="directeur"
                    value={formData.directeur}
                    onChange={handleInputChange}
                    list="directors-list"
                    placeholder="Nhập hoặc chọn đạo diễn"
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none"
                  />
                  <datalist id="directors-list">
                    {directors.map((director, index) => (
                      <option key={index} value={director} />
                    ))}
                  </datalist>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Diễn viên</label>
                  <input
                    type="text"
                    name="actor"
                    value={formData.actor}
                    onChange={handleInputChange}
                    list="actors-list"
                    placeholder="Nhập hoặc chọn diễn viên (cách nhau bởi dấu phẩy)"
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none"
                  />
                  <datalist id="actors-list">
                    {actors.map((actor, index) => (
                      <option key={index} value={actor} />
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Row 7: Item Type */}
              <div>
                <label className="block text-gray-300 mb-3 text-sm">Loại phim:</label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="is_series"
                      checked={!formData.is_series}
                      onChange={() => setFormData(prev => ({ ...prev, is_series: false }))}
                      className="w-5 h-5 text-pink-500 bg-gray-700 border-gray-600 focus:ring-pink-500"
                    />
                    <span className="text-white">Phim lẻ</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="is_series"
                      checked={formData.is_series}
                      onChange={() => setFormData(prev => ({ ...prev, is_series: true }))}
                      className="w-5 h-5 text-pink-500 bg-gray-700 border-gray-600 focus:ring-pink-500"
                    />
                    <span className="text-white">Phim bộ</span>
                  </label>
                </div>
              </div>

              {/* Row 8: Upload Video */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm">Upload video</label>
                <div className="relative">
                  <input
                    type="text"
                    name="video_url"
                    value={formData.video_url}
                    onChange={handleInputChange}
                    placeholder="URL video"
                    className="w-full px-4 py-3 pr-12 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Film size={20} />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-colors uppercase"
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FilterBar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    genre: "",
    country: "",
    year: "",
    sort: "latest"
  });

  const genres = [
    "Hành động", "Hài", "Tình cảm", "Kinh dị", 
    "Khoa học viễn tưởng", "Hoạt hình", "Phiêu lưu"
  ];

  const countries = [
    "Việt Nam", "Hàn Quốc", "Trung Quốc", "Nhật Bản",
    "Mỹ", "Thái Lan", "Ấn Độ"
  ];

  const years = Array.from({ length: 10 }, (_, i) => 2025 - i);

  const handleChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Thể loại</label>
        <select 
          value={filters.genre} 
          onChange={(e) => handleChange("genre", e.target.value)}
        >
          <option value="">Tất cả</option>
          {genres.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>

      <div className="filter-group">
        <label>Quốc gia</label>
        <select 
          value={filters.country} 
          onChange={(e) => handleChange("country", e.target.value)}
        >
          <option value="">Tất cả</option>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="filter-group">
        <label>Năm</label>
        <select 
          value={filters.year} 
          onChange={(e) => handleChange("year", e.target.value)}
        >
          <option value="">Tất cả</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>

      <div className="filter-group">
        <label>Sắp xếp</label>
        <select 
          value={filters.sort} 
          onChange={(e) => handleChange("sort", e.target.value)}
        >
          <option value="latest">Mới nhất</option>
          <option value="popular">Phổ biến</option>
          <option value="rating">Đánh giá</option>
        </select>
      </div>
    </div>
  );
}

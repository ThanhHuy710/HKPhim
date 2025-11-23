export const API_BASE_URL = "http://localhost:5001/api";

export const ROUTES = {
  HOME: "/",
  MOVIE_DETAIL: "/phim/:id",
  SEARCH: "/search",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  FAVORITES: "/favorites",
};

export const GENRES = [
  "Hành động",
  "Hài",
  "Tình cảm",
  "Kinh dị",
  "Khoa học viễn tưởng",
  "Hoạt hình",
  "Phiêu lưu",
  "Tâm lý",
  "Hình sự",
  "Chiến tranh",
];

export const COUNTRIES = [
  "Việt Nam",
  "Hàn Quốc",
  "Trung Quốc",
  "Nhật Bản",
  "Mỹ",
  "Thái Lan",
  "Ấn Độ",
  "Anh",
  "Pháp",
];

export const YEARS = Array.from({ length: 30 }, (_, i) => 2025 - i);

export const SORT_OPTIONS = [
  { value: "latest", label: "Mới nhất" },
  { value: "popular", label: "Phổ biến" },
  { value: "rating", label: "Đánh giá cao" },
  { value: "views", label: "Xem nhiều" },
];

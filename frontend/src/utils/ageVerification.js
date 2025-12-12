// Tính tuổi từ chuỗi ngày sinh
export const calculateAge = (birthdayString) => {
  if (!birthdayString) return null;
  
  const birthday = new Date(birthdayString);
  const today = new Date();
  
  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  
  return age;
};

// Chuyển đổi chuỗi age rating thành số
export const parseAgeRating = (rating) => {
  if (!rating) return 0;
  
  const ratingStr = rating.toString().toUpperCase();
  
  // Xử lý các định dạng phổ biến
  if (ratingStr === 'R' || ratingStr === 'NC-17') return 17;
  if (ratingStr === 'PG-13' || ratingStr.includes('13')) return 13;
  if (ratingStr === 'PG') return 7;
  if (ratingStr === 'G' || ratingStr === 'P') return 0;
  
  // Trích xuất số từ chuỗi kiểu "18+", "16+", v.v.
  const match = ratingStr.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

// Kiểm tra xem user có thể xem phim dựa trên độ tuổi
export const canWatchFilm = (birthday, ageRating) => {
  if (!birthday) return false; // Phải có ngày sinh
  if (!ageRating) return true; // Không có rating nghĩa là mọi người đều xem được
  
  const userAge = calculateAge(birthday);
  const requiredAge = parseAgeRating(ageRating);
  
  return userAge >= requiredAge;
};

// Lấy text hiển thị cho age rating
export const getAgeRatingText = (rating) => {
  if (!rating) return 'Mọi lứa tuổi';
  
  const age = parseAgeRating(rating);
  if (age === 0) return 'Mọi lứa tuổi';
  
  return `${age}+`;
};

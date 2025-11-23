# TODO - Các Phần Cần Hoàn Thành

## 🎨 Frontend - Các Phần Cần Bổ Sung

### 1. Logo và Branding
- **Header.jsx**: Thay thế text "HKphim" bằng logo thực tế
  ```jsx
  // Vị trí: frontend/src/components/layout/Header.jsx (line ~23)
  // Hiện tại: <span className="logo-text">HKphim</span>
  // Đổi thành: <img src="/logo.png" alt="HKphim" className="logo-img" />
  ```

### 2. Hero Section Background
- **HeroSection.jsx**: Thêm video background hoặc slideshow banner phim hot
  ```jsx
  // Vị trí: frontend/src/components/HeroSection.jsx
  // Có thể dùng <video> tag hoặc carousel component
  ```

### 3. MovieCard Badges
- **MovieCard.jsx**: Thêm badge chất lượng (HD, CAM, Full HD, etc.)
  ```jsx
  // Cần thêm field 'quality' vào database table 'films'
  // Hoặc lấy từ video_files table
  // Hiển thị ở góc trên bên phải poster
  ```

## 🔧 Backend API - Các Endpoints Cần Implement

### 1. Authentication Endpoints
```javascript
// Vị trí: backend/src/routes/auth.js (cần tạo mới)

POST /api/auth/register
// Body: { email, password, name }
// Response: { token, user }

POST /api/auth/login
// Body: { email, password }
// Response: { token, user }

GET /api/auth/me
// Headers: Authorization: Bearer <token>
// Response: { user }
```

### 2. Films Category Endpoints
```javascript
// Vị trí: backend/src/routes/films.js

GET /api/films/hot
// Trả về phim hot: view_count cao, created_at gần đây
// SQL: ORDER BY view_count DESC, created_at DESC LIMIT 10

GET /api/films/popular
// Trả về phim phổ biến: average_rating cao
// SQL: ORDER BY average_rating DESC LIMIT 10

GET /api/films/upcoming
// Trả về phim sắp chiếu: year = năm hiện tại hoặc release_date sắp tới
// SQL: WHERE year >= YEAR(CURDATE()) ORDER BY release_date ASC

GET /api/films/favorites
// Trả về phim yêu thích nhiều nhất
// SQL: JOIN favorites table, GROUP BY film_id, ORDER BY COUNT(*) DESC
```

### 3. Search Endpoint
```javascript
GET /api/films/search?q=keyword&genre=&country=&year=
// Tìm kiếm theo: title, actor, directeur
// Support filters: genre, country, year
// SQL: WHERE (title LIKE %keyword% OR actor LIKE %keyword%) AND ...
```

### 4. Episodes Endpoint
```javascript
GET /api/films/:id/episodes
// Trả về danh sách tập phim cho series
// SQL: SELECT * FROM episodes WHERE film_id = :id ORDER BY episode_number ASC
```

### 5. Feedbacks/Comments Endpoints
```javascript
GET /api/films/:id/feedbacks
// Lấy danh sách comments cho phim

POST /api/feedbacks
// Body: { film_id, user_id, content, rating }
// Thêm comment mới
```

### 6. Favorites Endpoints
```javascript
POST /api/favorites
// Body: { film_id, user_id }
// Thêm phim vào yêu thích

DELETE /api/favorites/:id
// Xóa phim khỏi yêu thích
```

### 7. Genres & Countries Endpoints
```javascript
GET /api/genres
// Trả về danh sách tất cả thể loại từ database
// Dùng cho dropdown menu trong Header

GET /api/countries
// Hoặc có thể hardcode như trong constants.js
```

## 📊 Database Changes Needed

### 1. Thêm Field `quality` vào Table `films`
```sql
ALTER TABLE films ADD COLUMN quality VARCHAR(10) DEFAULT 'HD';
-- Các giá trị: 'HD', 'Full HD', '4K', 'CAM', 'Bluray'
```

### 2. Thêm Field `release_date` cho Phim Sắp Chiếu
```sql
ALTER TABLE films ADD COLUMN release_date DATE NULL;
```

## 🎯 Các Trang Cần Tạo Thêm

### 1. Register Page
```
frontend/src/pages/RegisterPage.jsx
- Tương tự LoginPage nhưng thêm fields: name, confirm password
```

### 2. Profile Page
```
frontend/src/pages/ProfilePage.jsx
- Hiển thị thông tin user
- Danh sách phim yêu thích
- Lịch sử xem phim
```

### 3. Category Pages
```
frontend/src/pages/GenrePage.jsx
- Hiển thị phim theo thể loại
- URL: /the-loai/:slug

frontend/src/pages/CountryPage.jsx
- Hiển thị phim theo quốc gia
- URL: /quoc-gia/:slug
```

## ✅ Những Gì Đã Hoàn Thành

- ✅ Backend Express server với MySQL connection
- ✅ Prisma schema với 12 models
- ✅ Frontend React + Vite structure
- ✅ Routing với 5 pages chính
- ✅ Header với dropdown menus (Thể loại, Quốc gia)
- ✅ MovieCard với view count badge
- ✅ Hero section với filters
- ✅ Video player với HLS.js
- ✅ Authentication context
- ✅ Custom hooks (useFilms)
- ✅ Reusable UI components
- ✅ CSS styling với dark theme
- ✅ Comments/TODOs trong code đánh dấu các phần cần bổ sung

## 📝 Ghi Chú

1. **Priority cao nhất**: Implement authentication endpoints trước để có thể test login/register
2. **Priority cao**: Tạo các category endpoints để HomePage hiển thị đúng dữ liệu
3. **Priority trung bình**: Thêm search, episodes, feedbacks
4. **Priority thấp**: Profile page, admin panel

Tất cả các TODO comments đã được đánh dấu trong code với format:
```
// TODO: Mô tả cần làm gì
```

Có thể search "TODO" trong toàn bộ project để tìm các vị trí cần bổ sung.

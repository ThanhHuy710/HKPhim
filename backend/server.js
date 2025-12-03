import express from "express"; // Framework để tạo server HTTP
import dotenv from "dotenv"; // Đọc biến môi trường từ file .env
import cors from "cors"; // Cho phép truy cập từ domain khác (Cross-Origin Resource Sharing)
import rootRouter from "./src/routes/root.router.js";
import "./src/common/constant/app.const.js"; // Import để chạy console.log kiểm tra env
import { error } from "./src/common/app_err/error.js";
import { initStrategyGoogleOauth20 } from "./src/common/passport/google-oauth20.passport.js";
import passport from "passport";

dotenv.config();

const PORT = 5001;

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use(passport.initialize());
initStrategyGoogleOauth20();

// Sử dụng rootRouter cho tất cả các route bắt đầu với /api
app.use("/api", rootRouter);
app.use(error);

//connect DB

app.listen(PORT, () => {
  console.log(`server bat dau tren cong ${PORT}`);
});

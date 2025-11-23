import express from "express"; // Framework để tạo server HTTP
import dotenv from "dotenv"; // Đọc biến môi trường từ file .env
import cors from "cors"; // Cho phép truy cập từ domain khác (Cross-Origin Resource Sharing)
import rootRouter from "./src/routes/root.router.js";


dotenv.config();

const PORT = 5001;

const app = express();

app.use(express.json()); 
app.use(cors({origin:"http://localhost:5173"}));
// Sử dụng rootRouter cho tất cả các route bắt đầu với /api
app.use("/api", rootRouter);

//connect DB

app.listen(PORT, () => {
    console.log(`server bat dau tren cong ${PORT}`);
});

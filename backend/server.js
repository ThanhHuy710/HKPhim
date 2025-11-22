import express from "express"; // Framework để tạo server HTTP
import taskRoute from "./src/routes/films.js"; // Định nghĩa các endpoint liên quan đến tasks
import { connectDB } from "./src/config/db.js"; // Hàm kết nối đến database
import dotenv from "dotenv"; // Đọc biến môi trường từ file .env
import cors from "cors"; // Cho phép truy cập từ domain khác (Cross-Origin Resource Sharing)


dotenv.config();

const PORT = 5001;

const app = express();

app.use(express.json()); 
app.use(cors({origin:"http://localhost:5173"}));
app.use("/api/tasks", taskRoute);

//connect DB
connectDB();

app.listen(PORT, () => {
    console.log(`server bat dau tren cong ${PORT}`);
});

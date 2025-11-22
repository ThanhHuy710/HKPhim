import { connectDB } from "../src/config/db.js";
//các phương thức
export const getAllTasks = async (req, res) => {
    try {
    const db = await connectDB();
    const [films] = await db.execute('SELECT * FROM films');
    res.status(200).json({ films }); //gửi dữ liệu về frontend
  } catch (error) {
    console.log("loi khi goi getAllTasks:", error); //gui o sever chi cho dev xem dc
    res.status(500).json({ message: "loi he thong" }); //gui loi chung chung den nguoi dung
  }
}
// export const createTasks = async (req, res) => {
//   try {
   
//   } catch (error) {
//     console.log("loi khi goi createTasks:", error); //gui o sever chi cho dev xem dc
//     res.status(500).json({ message: "loi he thong " }); //gui loi chung chung den nguoi dung
//   }
// };
// export const updateTasks = async (req, res) => {
//   try {
    
//     if (!updateTask) {
//       return res.status(404).json({ message: "Nhiem vu khong ton tai" });
//     }
//     // trả về task đã cập nhật để client biết request đã hoàn thành
//     res.status(200).json({ message: "Update", id: updateTask._id });
//   } catch (error) {
//     console.log("loi khi goi updateTasks:", error); //gui o sever chi cho dev xem dc
//     res.status(500).json({ message: "loi he thong " }); //gui loi chung chung den nguoi dung
//   }
// };
// export const deleteTasks = async (req, res) => {
//   try {
    
//     if (!deleteTask) {
//       return res.status(404).json({ message: "nhiem vu khong ton tai" });
//     }
//     // trả về xác nhận xóa để axios resolve và frontend có thể hiển thị toast/re-render
//     return res.status(200).json({ message: "Deleted", id: deleteTask._id });
//   } catch (error) {
//     console.log("loi khi goi deleteTasks:", error); //gui o sever chi cho dev xem dc
//     res.status(500).json({ message: "loi he thong " }); //gui loi chung chung den nguoi dung
//   }
// };

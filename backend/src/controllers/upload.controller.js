import { responseSuccess } from "../common/helper/function.helper.js";

export const uploadController = {
  uploadAvatar: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Không có file được tải lên" });
      }

      // URL của file đã upload (sẽ lưu trong thư mục public/uploads/avatars)
      const avatarUrl = `/uploads/avatars/${req.file.filename}`;
      
      const response = responseSuccess({ url: avatarUrl }, "Upload avatar thành công", 200);
      return res.status(200).json(response);
    } catch (error) {
      console.error("Upload error:", error);
      return res.status(500).json({ error: "Upload thất bại" });
    }
  }
};

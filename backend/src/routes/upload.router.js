import express from "express";
import multer from "multer";
import path from "path";
import { uploadController } from "../controllers/upload.controller.js";

const uploadRouter = express.Router();

// Cấu hình multer để lưu file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/avatars'); // Thư mục lưu file
  },
  filename: function (req, file, cb) {
    // Tạo tên file unique: timestamp + random + extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, 'avatar-' + uniqueSuffix + ext);
  }
});

// Lọc chỉ cho phép upload ảnh
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Chỉ cho phép upload file ảnh (jpeg, jpg, png, gif, webp)'));
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn 5MB
  fileFilter: fileFilter
});

// Route upload avatar
uploadRouter.post("/avatar", upload.single('avatar'), uploadController.uploadAvatar);

export default uploadRouter;

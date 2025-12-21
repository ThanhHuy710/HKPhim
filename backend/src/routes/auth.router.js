import express from "express";
import { authController } from "../controllers/auth.controller.js";
import protect from "../common/middlewares/protect.middleware.js";
import passport from "passport";

const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.get("/get-info", protect, authController.getInfo);
//login google
// khi người dùng click vào đăng nhập google thì FE sẽ gọi tới GET : api/auth/google
//kích hoạt passport để:
//1. chuyển hướng người dùng tới trang đăng nhập của google
//2. yêu cầu quyền truy cập profile của người dùng từ google
authRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

//sau khi người dùng xác thuc thành công ở google
//google sẽ chuyển hướng người dùng về lại đường dẫn callbackURL đã khai báo ở google-oauth20.passport.js
//API này để hứng tin trả về từ google, kích hoạt middleware passport.authenticate để xử lý dữ liệu trả về từ google
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  authController.googleCallback
);

authRouter.post("/refresh-token", authController.refreshToken);

// Tạo route CRUD
authRouter.post("/", authController.create);
authRouter.get("/", authController.findAll);
authRouter.get("/:id", authController.findOne);
authRouter.patch("/:id", authController.update);
authRouter.delete("/:id", authController.remove);

export default authRouter;

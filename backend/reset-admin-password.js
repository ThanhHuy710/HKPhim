import prisma from "./src/common/prisma/connect.prisma.js";
import bcrypt from "bcrypt";

async function resetAdminPassword() {
  try {
    const newPassword = "123456";
    const hashPassword = bcrypt.hashSync(newPassword, 10);
    
    const admin = await prisma.users.update({
      where: { email: "admin@example.com" },
      data: { password: hashPassword }
    });
    
    console.log("✅ Đã reset mật khẩu admin thành công!");
    console.log("Email:", admin.email);
    console.log("Mật khẩu mới:", newPassword);
  } catch (error) {
    console.error("❌ Lỗi:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

resetAdminPassword();

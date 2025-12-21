import "dotenv/config";

export const DATABASE_URL = process.env.DATABASE_URL;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

// chỉ log khi dev để kiểm tra
// khi lên prod phải tắt đi
console.log(
  "\n",
  {
    DATABASE_URL: DATABASE_URL,
    GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: GOOGLE_CLIENT_SECRET,
    ACCESS_TOKEN_SECRET: ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: REFRESH_TOKEN_SECRET,
  },
  "\n"
);

import mysql from "mysql2/promise";

let pool;

export const connectDB = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "",
      database: "webxemphim",
      waitForConnections: true,
      connectionLimit: 10, // số connection tối đa
      queueLimit: 0
    });
    console.log("MySQL pool created");
  }
  return pool;
};

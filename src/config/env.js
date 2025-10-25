const path = require("path");
const dotenv = require("dotenv");

// Le indicamos la ruta exacta al archivo .env (que está fuera de /src)
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

console.log("Variables cargadas:", process.env.DB_USER, process.env.DB_NAME);

module.exports = pool;

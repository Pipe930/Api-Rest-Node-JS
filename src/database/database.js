import { createPool } from "mysql2/promise";
import { conexionDB } from "../config.js";

export const connection = createPool({
    host: conexionDB.DB_HOST,
    user: conexionDB.DB_USER,
    password: conexionDB.DB_PASSWORD,
    port: conexionDB.DB_PORT,
    database: conexionDB.DB_DATABASE
});
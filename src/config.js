import { config } from "dotenv";

config();

export const puerto = process.env.PORT;

export const conexionDB = {
    DB_USER: process.env.DB_USER || '',
    DB_PORT: process.env.DB_PORT || 0,
    DB_DATABASE: process.env.DB_DATABASE || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_HOST: process.env.DB_HOST || ''
}
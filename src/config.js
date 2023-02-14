import { config } from "dotenv";

config();

export const puerto = process.env.PORT_URL;

export const conexionDB = {
    DB_USER: process.env.USER || '',
    DB_PORT: process.env.PORT || 0,
    DB_DATABASE: process.env.DATABASE || '',
    DB_PASSWORD: process.env.PASSWORD || '',
    DB_HOST: process.env.HOST || ''
}
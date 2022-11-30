import express from 'express';
import http from 'http';
import cors from "cors";
import * as dotenv from "dotenv";
import morgan from "morgan";

const app = express();
app.use(
    cors({
        origin: "*",
    })
);

http.createServer(app);
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
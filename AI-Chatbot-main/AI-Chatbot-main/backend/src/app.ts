import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();

const app = express();

// middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cors({ origin: "https://ai-chatbot-beta-three.vercel.app/", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// we can remove it at deployment
app.use(morgan("dev"));

// middleware
app.use("/api/v1", appRouter);

export default app;

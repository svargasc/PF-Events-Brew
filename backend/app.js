import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors'

import authRoutes from "./routes/auth.routes.js";
import eventRoutes from "./routes/events.routes.js";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth/", authRoutes);
app.use("/api/", eventRoutes);

export default app;

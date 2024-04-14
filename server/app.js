import cookieParser from "cookie-parser";
import express from "express";
import { config } from "dotenv";
config();
import cors from "cors";
import errorMiddleware from "./middlewares/error.middleware.js";
import morgan from "morgan";
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(cookieParser());

app.get("/ping", (_req, res) => {
  res.send("Pong");
});

// Import all routes
import userRoutes from "./routes/user.routes.js";

app.use("/api/v1/user", userRoutes);

app.all("*", (_req, res) => {
  res.status(404).send("OOPS!!! 404 Page Not Found");
});

// Custom error handling middleware
app.use(errorMiddleware);

export default app;

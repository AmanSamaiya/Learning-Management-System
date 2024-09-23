import cookieParser from "cookie-parser";
import express from "express";
import { config } from "dotenv";
config();
import cors from "cors";
import errorMiddleware from "./middlewares/error.middleware.js";
import morgan from "morgan";
// Import all routes
import userRoutes from "./routes/user.routes.js";
import courseRoutes from "./routes/course.routes.js"
import paymentRoutes from "./routes/payment.routes.js"


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));

app.use(morgan("dev"));
app.use(cookieParser());

app.get("/ping", (_req, res) => {
  res.send("Pong");
});


app.use("/api/v1/user", userRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/payments', paymentRoutes);

app.all("*", (_req, res) => {
  res.status(404).send("OOPS!!! 404 Page Not Found");
});

// Custom error handling middleware
app.use(errorMiddleware);

export default app;

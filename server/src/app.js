import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoute.js";
import errorHandler from "./middlewares/errorniddleware.js";

const app = express();

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorHandler);

export default app;

import express from "express";
import mongoose from "mongoose";
import moviewRoutes from "./routes/movieRoutes.js";
import cors from "cors";
const app = express();
import movieRoutes from "./routes/movieRoutes.js";

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.use("/api/movies", movieRoutes);

export default app;

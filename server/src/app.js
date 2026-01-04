import express from "express";
import mongoose from "mongoose";
import moviewRoutes from "./routes/movieRoutes.js";
import cors from "cors";
const app = express();
import movieRoutes from "./routes/movieRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import metaRoutes from "./routes/metaRoutes.js";

app.use(cors());
app.use(express.json());
app.use("/api", metaRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api", metaRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;

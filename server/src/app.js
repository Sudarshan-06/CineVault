const express = require("express");
const cors = require("cors");

const movieRoutes = require("./routes/movieRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.use("/api/movies", movieRoutes);

module.exports = app;

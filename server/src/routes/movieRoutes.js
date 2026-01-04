import express from "express";
const router = express.Router();
import { getMovies, getMovieById, createMovie } from "../controllers/movieController.js";


router.get("/", getMovies);
router.get("/:id", getMovieById);
router.post("/", createMovie);

export default router;

import express from "express";
const router = express.Router();
import { getMovies, getMovieById, createMovie } from "../controllers/movieController.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         title:
 *           type: string
 *         releaseYear:
 *           type: number
 *         rating:
 *           type: number
 *         director:
 *           type: string
 *         genres:
 *           type: array
 *           items:
 *             type: string
 *         actors:
 *           type: array
 *           items:
 *             type: string
 */

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get all movies
 *     description: Retrieve movies with optional filters
 *     parameters:
 *       - in: query
 *         name: genre
 *         schema:
 *           type: string
 *       - in: query
 *         name: actor
 *         schema:
 *           type: string
 *       - in: query
 *         name: director
 *         schema:
 *           type: string
 *       - in: query
 *         name: releaseYear
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: List of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */

/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *     summary: Get movie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie details
 *       404:
 *         description: Movie not found
 */

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.post("/", createMovie);

export default router;

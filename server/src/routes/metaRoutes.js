/**
 * @swagger
 * /api/actors:
 *   get:
 *     summary: Get all actors
 *     responses:
 *       200:
 *         description: List of actors
 *
 * /api/directors:
 *   get:
 *     summary: Get all directors
 *     responses:
 *       200:
 *         description: List of directors
 *
 * /api/genres:
 *   get:
 *     summary: Get all genres
 *     responses:
 *       200:
 *         description: List of genres
 */

import express from "express";
import {
  getActors,
  getDirectors,
  getGenres,
} from "../controllers/metaController.js";

const router = express.Router();

router.get("/actors", getActors);
router.get("/directors", getDirectors);
router.get("/genres", getGenres);

export default router;

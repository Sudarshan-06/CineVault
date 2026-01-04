import Movie from "../models/Movie.js";

/**
 * GET /api/actors
 */
export const getActors = async (req, res) => {
  try {
    const movies = await Movie.find({}, "actors");
    const actors = [
      ...new Set(movies.flatMap((m) => m.actors || [])),
    ];
    res.json(actors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * GET /api/directors
 */
export const getDirectors = async (req, res) => {
  try {
    const movies = await Movie.find({}, "director");
    const directors = [
      ...new Set(movies.map((m) => m.director).filter(Boolean)),
    ];
    res.json(directors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * GET /api/genres
 */
export const getGenres = async (req, res) => {
  try {
    const movies = await Movie.find({}, "genres");
    const genres = [
      ...new Set(movies.flatMap((m) => m.genres || [])),
    ];
    res.json(genres);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

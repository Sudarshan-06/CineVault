import Movie from "../models/Movie.js";

// GET /api/movies?genre=&actor=&director=&releaseYear=


export const getMovies = async (req, res) => {
  try {
    const { genre, actor, director, releaseYear } = req.query;

    const filter = {};

    // Filter by release year
    if (releaseYear) {
      filter.releaseYear = Number(releaseYear);
    }

    // Filter by director (string)
    if (director && director.trim() !== "") {
      filter.director = director;
    }

    // Filter by genre (array field)
    if (genre && genre.trim() !== "") {
      filter.genres = { $in: [genre] };
    }

    // Filter by actor (array field)
    if (actor && actor.trim() !== "") {
      filter.actors = { $in: [actor] };
    }

    const movies = await Movie.find(filter);

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/movies/:id
export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/movies
export const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

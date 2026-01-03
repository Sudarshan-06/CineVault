const Movie = require("../models/Movie");

exports.getMovies = async (req, res) => {
  try {
    const { genre, actor, director, releaseYear } = req.query;

    let query = Movie.find();

    if (releaseYear) {
      query = query.where("releaseYear").equals(Number(releaseYear));
    }

    if (director) {
      query = query.populate({
        path: "director",
        match: { name: director }
      });
    } else {
      query = query.populate("director");
    }

    if (genre) {
      query = query.populate({
        path: "genres",
        match: { name: genre }
      });
    } else {
      query = query.populate("genres");
    }

    if (actor) {
      query = query.populate({
        path: "actors",
        match: { name: actor }
      });
    } else {
      query = query.populate("actors");
    }

    let movies = await query.exec();

    // Remove movies that failed populate filter
    movies = movies.filter(
      (m) =>
        (!genre || m.genres.length > 0) &&
        (!actor || m.actors.length > 0) &&
        (!director || m.director)
    );

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
      .populate("actors")
      .populate("genres")
      .populate("director");

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

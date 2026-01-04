import axios from "axios";
import mongoose from "mongoose";
import dotenv from "dotenv";

import Movie from "../src/models/Movie.js";
import Actor from "../src/models/Actor.js";
import Director from "../src/models/Director.js";
import Genre from "../src/models/Genre.js";

dotenv.config();

const TMDB_BASE = "https://api.themoviedb.org/3";

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("Connected to DB");

  const { data } = await axios.get(
    `${TMDB_BASE}/movie/popular?api_key=${process.env.TMDB_API_KEY}`
  );

  for (const item of data.results.slice(0, 10)) {
    const movie = await Movie.create({
      title: item.title,
      releaseYear: item.release_date?.split("-")[0],
      rating: item.vote_average,
      genres: [],
      actors: [],
       director: "Christopher Nolan" // hardcoded is OK for now
    });

    console.log(`Saved: ${movie.title}`);
  }

  console.log("Seeding complete");
  process.exit();
}

seed();

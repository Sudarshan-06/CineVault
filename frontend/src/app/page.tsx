import Link from "next/link";
import {
  fetchMovies,
  fetchGenres,
  fetchDirectors,
  fetchActors,
} from "@/lib/api";
import { Movie } from "@/types/movie";

type SearchParams = {
  genre?: string;
  director?: string;
  actor?: string;
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // ✅ IMPORTANT: await searchParams
  const resolvedParams = await searchParams;

  const movies: Movie[] = await fetchMovies(resolvedParams);

  const [genres, directors, actors] = await Promise.all([
    fetchGenres(),
    fetchDirectors(),
    fetchActors(),
  ]);

  return (
    <main className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold">🎬 CineVault</h1>

      {/* FILTERS */}
      <form className="flex gap-4 flex-wrap">
        <select
          name="genre"
          defaultValue={resolvedParams.genre || ""}
          className="border p-2"
        >
          <option value="">All Genres</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <select
          name="director"
          defaultValue={resolvedParams.director || ""}
          className="border p-2"
        >
          <option value="">All Directors</option>
          {directors.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select
          name="actor"
          defaultValue={resolvedParams.actor || ""}
          className="border p-2"
        >
          <option value="">All Actors</option>
          {actors.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>

        <button className="bg-black text-white px-4 py-2 rounded">
          Apply Filters
        </button>
      </form>

      {/* MOVIES */}
      {movies.length === 0 && (
        <p className="text-gray-500">No movies found</p>
      )}

      <div className="grid gap-4">
        {movies.map((movie) => (
          <Link
            key={movie._id}
            href={`/movies/${movie._id}`}
            className="p-4 border rounded hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Director: {movie.director}</p>
            <p className="text-sm text-gray-600">
              Genres: {movie.genres.join(", ")}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}

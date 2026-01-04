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
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
    <h1 className="text-4xl font-extrabold tracking-tight flex items-center gap-3">
  🎬 <span>CineVault</span>
</h1>

      {/* FILTERS */}
      <form className="bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-xl p-4 flex flex-wrap gap-4 items-center">

        <select
          name="genre"
          defaultValue={resolvedParams.genre || ""}
          className="bg-black border border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"

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
        className="bg-black border border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"

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
         className="bg-black border border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"

        >
          <option value="">All Actors</option>
          {actors.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>

        <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-4 py-2 rounded-md font-medium">
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
            <p>
  Director:{" "}
  <Link
    href={`/directors/${encodeURIComponent(movie.director)}`}
    className="underline"
  >
    {movie.director}
  </Link>
</p>

            <p className="text-sm text-gray-600">
              Genres: {movie.genres.join(", ")}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}

import Link from "next/link";
import {
  fetchMovies,
  fetchGenres,
  fetchDirectors,
  fetchActors,
} from "@/lib/api";
import { Movie } from "@/types/movie";
import Image from "next/image";

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

      {/* MOVIES */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  {movies.map((movie) => (
    <div
      key={movie._id}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-zinc-200"
    >
      {/* IMAGE */}
    <div className="relative h-56 w-full">
  <Image
    src={movie.image || "/placeholder.jpg"}
    alt={movie.title}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 33vw"
  />
</div>


      {/* CONTENT */}
      <div className="p-4">
       <h2 className="text-lg font-semibold text-zinc-900 mb-1">
  <Link
    href={`/movies/${movie._id}`}
    className="transition hover:text-purple-600"
  >
    {movie.title}
  </Link>
</h2>


        <p className="text-sm text-zinc-500">
          {movie.releaseYear}
        </p>

        <p className="text-sm mt-1">
          Director:{" "}
          <Link
  href={`/directors/${encodeURIComponent(movie.director)}`}
  className="text-purple-600 hover:underline"
>
  {movie.director}
</Link>
        </p>

        <p className="text-xs text-zinc-400 mt-2">
          {movie.genres.join(" • ")}
        </p>
      </div>
    </div>
  ))}
</div>

    </main>
  );
}

import Link from "next/link";
import { fetchMovies } from "@/lib/api";
import { Movie } from "@/types/movie";

export default async function ActorPage({
  params,
}: {
  params: { name: string };
}) {
  const actorName = decodeURIComponent(params.name);

  const movies: Movie[] = await fetchMovies({ actor: actorName });

  return (
    <main className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">🎭 {actorName}</h1>

      {movies.length === 0 && (
        <p className="text-gray-500">
          No movies found for this actor.
        </p>
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

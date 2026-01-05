import Link from "next/link";
import Image from "next/image";
import { fetchMoviesByDirector } from "@/lib/api";
import { Movie } from "@/types/movie";

export default async function DirectorPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const directorName = decodeURIComponent(name);


  const movies: Movie[] = await fetchMoviesByDirector(directorName);

  return (
    <main className="min-h-screen bg-white px-6 py-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-zinc-900 mb-2">
        🎬 {directorName}
      </h1>

      <p className="text-zinc-500 mb-6">
        Movies directed by {directorName}
      </p>

      {/* Movies */}
      {movies.length === 0 ? (
        <p className="text-zinc-500">No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={movie.image || "/placeholder.jpg"}
                  alt={movie.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h2 className="font-semibold text-lg">
                  <Link
                    href={`/movies/${movie._id}`}
                    className="hover:text-purple-600"
                  >
                    {movie.title}
                  </Link>
                </h2>

                <p className="text-sm text-zinc-500">
                  {movie.releaseYear}
                </p>

                <p className="text-xs text-zinc-400 mt-1">
                  {movie.genres.join(" • ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

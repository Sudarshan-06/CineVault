import { fetchMovieById } from "@/lib/api";

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const movie = await fetchMovieById(params.id);

  return (
    <main className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">{movie.title}</h1>

      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Director:</strong> {movie.director}</p>

      <div>
        <h3 className="font-semibold">Genres</h3>
        <ul className="list-disc ml-6">
          {movie.genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">Actors</h3>
        <ul className="list-disc ml-6">
          {movie.actors.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

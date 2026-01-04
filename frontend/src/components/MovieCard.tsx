import Link from "next/link";
import { Movie } from "@/types";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-xl font-bold">{movie.title}</h2>
      <p>Year: {movie.releaseYear}</p>
      <p>Director: {movie.director?.name}</p>

      <Link
        href={`/movies/${movie._id}`}
        className="text-blue-500 mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}

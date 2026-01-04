import { Movie } from "@/types/movie";

const API_URL = "http://localhost:5000/api";

export async function fetchMovies(): Promise<Movie[]> {
  const res = await fetch(`${API_URL}/movies`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
}

export async function fetchMovieById(id: string): Promise<Movie> {
  const res = await fetch(`${API_URL}/movies/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Movie not found");
  return res.json();
}

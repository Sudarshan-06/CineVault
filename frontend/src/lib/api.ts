import { Movie } from "@/types/movie";

const API_URL = "http://localhost:5000/api";

export async function fetchMovies(
  filters: Record<string, string | undefined> = {}
): Promise<Movie[]> {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (typeof value === "string" && value.length > 0) {
      params.append(key, value);
    }
  });

  const queryString = params.toString();
  const url = queryString
    ? `http://localhost:5000/api/movies?${queryString}`
    : `http://localhost:5000/api/movies`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
}

export async function fetchGenres(): Promise<string[]> {
  const res = await fetch("http://localhost:5000/api/genres", {
    cache: "no-store",
  });
  return res.json();
}

export async function fetchDirectors(): Promise<string[]> {
  const res = await fetch("http://localhost:5000/api/directors", {
    cache: "no-store",
  });
  return res.json();
}

export async function fetchActors(): Promise<string[]> {
  const res = await fetch("http://localhost:5000/api/actors", {
    cache: "no-store",
  });
  return res.json();
}

export async function fetchMovieById(id: string): Promise<Movie> {
  const res = await fetch(`${API_URL}/movies/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Movie not found");
  return res.json();
}

export interface Genre {
  _id: string;
  name: string;
}

export interface Actor {
  _id: string;
  name: string;
}

export interface Director {
  _id: string;
  name: string;
}

export interface Movie {
  _id: string;
  title: string;
  releaseYear: number;
  rating: number;
  genres: Genre[];
  actors: Actor[];
  director: Director;
}

export interface MovieModel {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  popularity: number;
  release_date: string;
  adult: boolean;
  poster_path: string | null;
  backdrop_path: string | null;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genre_ids: Array<number>;
}

export interface MovieDetailsModel extends MovieModel {
  status: string;
  tagline: string;
  genres: Array<{ id: number; name: string }>;
  runtime: number;
}

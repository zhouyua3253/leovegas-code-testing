import Head from "next/head";
import { GetStaticProps } from "next";
import { discoverMovies } from "@Services/movieServices";
import { MovieModel } from "@Models/movieModel";
import MovieCard from "@Components/MovieCard";

interface HomePageProps {
  movies: Array<MovieModel>;
}

export default function HomePage({ movies }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Movie Gallery</title>
        <meta name="description" content="Movie Gallery" />
      </Head>

      <ul
        role="grid"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5"
      >
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} as="li" role="gridcell" />
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (
  context
) => {
  const data = await discoverMovies();

  return { props: { movies: data.results } };
};

import React from "react";
import { MovieDetailsModel } from "@Models/movieModel";
import { GetServerSideProps } from "next";
import { getMovieById } from "@Services/movieServices";
import MovieHero from "@Components/MovieHero";

interface MovieDetailsPageProps {
  movie: MovieDetailsModel;
}

export default function MovieDetailsPage({ movie }: MovieDetailsPageProps) {
  return (
    <>
      <MovieHero movie={movie} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  MovieDetailsPageProps,
  { id: string }
> = async (context) => {
  if (!context.params) {
    return { notFound: true };
  }

  const { id } = context.params;
  const movie = await getMovieById(id);

  if (!movie) {
    return { notFound: true };
  }

  return {
    props: { movie },
  };
};

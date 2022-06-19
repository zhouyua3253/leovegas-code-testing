import React from "react";
import { MovieDetailsModel } from "@Models/movieModel";
import { GetStaticPaths, GetStaticProps } from "next";
import { getMovieById } from "@Services/movieServices";
import MovieHero from "@Components/MovieHero";
import Head from "next/head";

interface MovieDetailsPageProps {
  movie: MovieDetailsModel;
}

export default function MovieDetailsPage({ movie }: MovieDetailsPageProps) {
  return (
    <>
      <Head>
        <title>{movie.title}</title>
        <meta name="description" content={movie.title} />
      </Head>

      <MovieHero movie={movie} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
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
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 30 minutes
    revalidate: 30 * 60, // In seconds
  };
};

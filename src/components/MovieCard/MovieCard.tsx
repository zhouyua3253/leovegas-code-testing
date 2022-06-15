import React, { HTMLAttributes } from "react";
import { MovieModel } from "@Models/movieModel";
import clsx from "clsx";
import PosterImage from "@Components/PosterImage";
import dayjs from "dayjs";
import Link from "next/link";

export interface MovieCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The movie info to be rendered.
   */
  movie: MovieModel;

  /**
   * The HTML node that is rendered.
   * Default is div
   */
  as?: React.ElementType;
}

export default function MovieCard({
  movie,
  className,
  as = "div",
  ...rest
}: MovieCardProps) {
  const { poster_path, title, release_date, vote_average, id } = movie;
  const formattedDate = dayjs(release_date).format("DD MMM YYYY");

  const Container = as;

  return (
    <Container
      className={clsx("max-w-screen-sm", className)}
      data-testid="movie-card"
      {...rest}
    >
      <Link href={`/movie/${id}`} passHref={true}>
        <a>
          {poster_path && (
            <PosterImage src={poster_path} alt={title} className="rounded-xl" />
          )}

          <h4 className="text-base mt-2 font-semibold px-2" aria-label={title}>
            {title}
          </h4>

          <p className="flex justify-between items-center px-2 pb-2">
            <span
              className="text-sm text-gray-500"
              aria-label={`Released at ${formattedDate}`}
            >
              {formattedDate}
            </span>
            <span
              className="text-lg font-bold text-lime-800"
              aria-label={`Score: ${vote_average}`}
            >
              {vote_average}
            </span>
          </p>
        </a>
      </Link>
    </Container>
  );
}

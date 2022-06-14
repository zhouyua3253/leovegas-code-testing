import React, { HTMLAttributes } from "react";
import { MovieModel } from "@Models/movieModel";
import clsx from "clsx";

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
  const Container = as;

  return (
    <Container className={clsx("max-w-screen-sm", className)} {...rest}>
      <p className="text-base" aria-label={movie.original_title}>
        {movie.original_title}
      </p>
      <p className="text-sm" aria-label={movie.overview}>
        {movie.overview}
      </p>
    </Container>
  );
}

import React, { HTMLAttributes } from "react";
import { MovieModel } from "@Models/movieModel";
import clsx from "clsx";
import PosterImage from "@Components/PosterImage";
import dayjs from "dayjs";

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
  const { poster_path, title, release_date } = movie;
  const formattedDate = dayjs(release_date).format("DD MMM YYYY");

  const Container = as;

  return (
    <Container className={clsx("max-w-screen-sm", className)} {...rest}>
      {poster_path && (
        <PosterImage src={poster_path} alt={title} className="rounded-xl" />
      )}

      <h4 className="text-base mt-2 mb-1 font-semibold" aria-label={title}>
        {title}
      </h4>
      <p className="text-sm text-gray-500" aria-label={formattedDate}>
        {formattedDate}
      </p>
    </Container>
  );
}

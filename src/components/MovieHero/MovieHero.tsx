import React from "react";
import { MovieDetailsModel } from "@Models/movieModel";
import clsx from "clsx";
import PosterImage from "@Components/PosterImage";
import { formatRunTime } from "@Utils/formatRunTime/formatRunTime";

export interface MovieHeroProps {
  /**
   * The movie details to be rendered.
   */
  movie: MovieDetailsModel;

  className?: string;
}

export default function MovieHero({ movie, className }: MovieHeroProps) {
  const {
    poster_path,
    title,
    release_date,
    overview,
    genres,
    runtime,
    tagline,
  } = movie;

  const formattedDate = release_date.substring(0, 4);
  const genreString = genres.map(({ name }) => name).join(", ");
  const runTimeString = formatRunTime(runtime);

  return (
    <section
      className={clsx("flex p-4 md:p-10 bg-slate-100 rounded-3xl", className)}
    >
      {poster_path && (
        <div className="max-w-xs">
          <PosterImage src={poster_path} alt={title} className="rounded-xl" />
        </div>
      )}

      <div className="md:ml-14 flex flex-col justify-center">
        <h1 className="text-4xl font-semibold" aria-label={title}>
          {title}
          <span className="font-normal text-slate-500 pl-3">
            {`(${release_date.substring(0, 4)})`}
          </span>
        </h1>

        <p className="font-light mt-2 mb-1">{`${formattedDate} • ${genreString} • ${runTimeString}`}</p>

        <p className="italic font-light text-slate-600">{tagline}</p>

        <h4 aria-label="Overview" className="mt-6 text-xl font-medium">
          Overview
        </h4>
        <p className="text-slate-700">{overview}</p>
      </div>
    </section>
  );
}

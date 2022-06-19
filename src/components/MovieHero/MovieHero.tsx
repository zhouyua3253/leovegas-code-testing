import React, { HTMLAttributes, ReactNode } from "react";
import { MovieDetailsModel } from "@Models/movieModel";
import clsx from "clsx";
import PosterImage from "@Components/PosterImage";
import { formatRunTime } from "@Utils/formatRunTime/formatRunTime";
import { Bookmark, Favorites } from "@Components/svgs";
import { useAppDispatch, useAppSelector } from "@Hooks";
import { favoriteActions, watchlistActions } from "@Actions";

export interface MovieHeroProps {
  /**
   * The movie details to be rendered.
   */
  movie: MovieDetailsModel;

  className?: string;
}

export default function MovieHero({ movie, className }: MovieHeroProps) {
  const {
    id,
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

  const dispatch = useAppDispatch();

  const { isInFavorite, isInWatchlist } = useAppSelector<{
    isInFavorite: boolean;
    isInWatchlist: boolean;
  }>((state) => {
    const favoriteMovies = state.favorites.movies;
    const isInFavorite = favoriteMovies.some((movieId) => id === movieId);

    const watchlistMovies = state.watchlist.movies;
    const isInWatchlist = watchlistMovies.some((movieId) => id === movieId);

    return { isInFavorite, isInWatchlist };
  });

  function onClickFavoriteButton() {
    if (isInFavorite) {
      dispatch(favoriteActions.removeFromFavorites({ id }));
    } else {
      dispatch(favoriteActions.addToFavorites({ id }));
    }
  }

  function onClickWatchLaterButton() {
    if (isInWatchlist) {
      dispatch(watchlistActions.removeFromWatchlist({ id }));
    } else {
      dispatch(watchlistActions.addToWatchlist({ id }));
    }
  }

  function ActionButtons() {
    return (
      <div className="mt-5 md:mt-6 flex items-center">
        <IconButton text="Mark as favorite" onClick={onClickFavoriteButton}>
          <Favorites
            width={36}
            height={36}
            fill={isInFavorite ? "red" : "#555"}
            aria-label="Mark as favorite"
          />
        </IconButton>

        <IconButton
          text="Add to watchlist"
          className="ml-5"
          onClick={onClickWatchLaterButton}
        >
          <Bookmark
            width={30}
            height={30}
            fill={isInWatchlist ? "red" : "#555"}
            aria-label="Add to watchlist"
          />
        </IconButton>
      </div>
    );
  }

  return (
    <section
      className={clsx(
        "flex flex-col md:flex-row md:p-10 md:bg-slate-100 rounded-3xl",
        className
      )}
    >
      {poster_path && (
        <div className="shrink-0 md:w-72">
          <PosterImage src={poster_path} alt={title} className="rounded-xl" />
        </div>
      )}

      <div className="mt-4 md:mt-0 md:ml-14 flex flex-col justify-center">
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

        <ActionButtons />
      </div>
    </section>
  );
}

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  text: string;
}

function IconButton({ children, onClick, text, className }: IconButtonProps) {
  return (
    <button
      aria-label={text}
      onClick={onClick}
      className={clsx("flex items-center", className)}
    >
      {children}
      <span className="ml-1 text-sm text-slate-600 font-medium">{text}</span>
    </button>
  );
}

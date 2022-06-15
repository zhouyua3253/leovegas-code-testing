import React from "react";
import MovieCard from "./MovieCard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";

describe("Components/MovieCard", () => {
  it("Should use div as default container.", () => {
    render(<MovieCard movie={mockMovie} />);

    expect(
      document.querySelector("div[data-testid='movie-card']")
    ).toBeVisible();
  });

  it("Should use " as " to render node.", () => {
    render(<MovieCard movie={mockMovie} as="section" />);

    expect(
      document.querySelector("section[data-testid='movie-card']")
    ).toBeVisible();
  });

  it("Should render a link to movie details page.", () => {
    render(<MovieCard movie={mockMovie} as="section" />);

    const link = document.querySelector("a");
    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", `/movie/${mockMovie.id}`);
  });

  it("Should render title,release_date, vote_average of movie on the card. ", () => {
    render(<MovieCard movie={mockMovie} as="section" />);

    expect(screen.getByText(mockMovie.title)).toBeVisible();
    expect(
      screen.getByText(dayjs(mockMovie.release_date).format("DD MMM YYYY"))
    ).toBeVisible();
    expect(screen.getByText(mockMovie.vote_average)).toBeVisible();
  });
});

const mockMovie = {
  adult: false,
  backdrop_path: "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
  genre_ids: [14, 12, 28],
  id: 338953,
  original_language: "en",
  original_title: "Fantastic Beasts: The Secrets of Dumbledore",
  overview:
    "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
  popularity: 4570.95,
  poster_path: "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
  release_date: "2022-04-06",
  title: "Fantastic Beasts: The Secrets of Dumbledore",
  video: false,
  vote_average: 6.9,
  vote_count: 1740,
};

import React from "react";
import { Meta, Story } from "@storybook/react";
import MovieCard, { MovieCardProps } from "./MovieCard";

export default {
  title: "Component/MovieCard",
  component: MovieCard,
} as Meta;

const Template: Story<MovieCardProps> = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
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
  },
  className: "w-80",
};

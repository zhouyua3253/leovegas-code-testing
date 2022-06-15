import React from "react";
import { Meta, Story } from "@storybook/react";
import PosterImage, { PosterImageProps } from "./PosterImage";

export default {
  title: "Component/PosterImage",
  component: PosterImage,
} as Meta;

const Template: Story<PosterImageProps> = (args) => <PosterImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
  alt: "poster",
};

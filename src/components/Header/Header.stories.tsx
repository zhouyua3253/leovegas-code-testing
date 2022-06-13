import React from "react";
import { Meta, Story } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Component/Header",
  component: Header,
} as Meta;

const Template: Story = (args) => <Header />;

export const Default = Template.bind({});

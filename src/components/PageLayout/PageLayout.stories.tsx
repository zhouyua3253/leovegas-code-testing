import React from "react";
import { Meta, Story } from "@storybook/react";
import PageLayout from "./PageLayout";

export default {
  title: "Component/PageLayout",
  component: PageLayout,
} as Meta;

const Template: Story<{ children: React.ReactNode }> = ({ children }) => (
  <PageLayout>{children}</PageLayout>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <div className="flex justify-center items-center bg-slate-100 p-40">
      THIS IS MAIN CONTENT
    </div>
  ),
};

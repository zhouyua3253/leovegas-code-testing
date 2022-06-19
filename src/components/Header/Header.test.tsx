import React from "react";
import Header from "./Header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Components/Header", () => {
  it('Should use "header" tag as container.', () => {
    render(<Header />);

    expect(document.querySelector("header")).toBeVisible();
  });

  it("Should have a link to home page.", () => {
    render(<Header />);

    const homePageLink = screen.getByTestId("home-page-link");
    expect(homePageLink).toHaveAttribute("href", "/");
    expect(homePageLink).toBeVisible();
  });

  it("Should have a link to watch later page.", () => {
    render(<Header />);

    const watchLaterPageLink = screen.getByTestId("watch-later-page-link");
    expect(watchLaterPageLink).toHaveAttribute("href", "/watch-list");
    expect(watchLaterPageLink).toBeVisible();
  });
});

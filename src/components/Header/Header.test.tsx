import React from "react";
import Header from "./Header";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Components/Select", () => {
  it('Should use "header" tag', () => {
    render(<Header />);

    expect(document.querySelector("header")).toBeInTheDocument();
  });
});

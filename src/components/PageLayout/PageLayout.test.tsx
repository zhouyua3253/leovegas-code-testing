import React from "react";
import PageLayout from "./PageLayout";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Components/PageLayout", () => {
  it('Should include "header", "main", "footer" tags in the document.', () => {
    render(
      <PageLayout>
        <div>content</div>
      </PageLayout>
    );

    expect(document.querySelector("header")).toBeInTheDocument();
    expect(document.querySelector("main")).toBeInTheDocument();
    expect(document.querySelector("footer")).toBeInTheDocument();
  });
});

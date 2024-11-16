import { expect, test } from "vitest";

import Page from "../src/app/page";

import { render, screen } from "@testing-library/react";

test("Page", () => {
  render(<Page />);

  const heading = screen.getByText("Streamify");

  expect(heading).toBeInTheDocument();
});

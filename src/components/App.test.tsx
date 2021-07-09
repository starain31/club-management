import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render Club Management header.", () => {
  render(<App />);
  const linkElement = screen.getByText(/Heading/i);
  expect(linkElement).toBeInTheDocument();
});

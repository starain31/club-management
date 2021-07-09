import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render Club Management header.", () => {
  render(<App />);
  const heading = screen.getByTestId(/heading/i);
  expect(heading).toBeInTheDocument();
});



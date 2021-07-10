import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render Club Management header.", () => {
  render(<App />);

  const heading = screen.getByTestId(/heading/i);
  expect(heading).toBeInTheDocument();
});

test("Render Members component", () => {
  render(<App />);

  const members = screen.getByTestId(/members/i);
  expect(members).toBeInTheDocument();
});

test("Render AddMember component", () => {
    render(<App/>);

    expect(screen.getByTestId('add-member')).toBeInTheDocument();
})

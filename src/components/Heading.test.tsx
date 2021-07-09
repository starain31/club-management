import React from "react";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

test('Render "Heading"', () => {
  render(<Heading />);
  const linkElement = screen.getByText(/Heading/i);
  expect(linkElement).toBeInTheDocument();
});

test('Render "Heading" with argument', () => {
  render(<Heading title={`Club Management`}/>);
  const linkElement = screen.getByText(/Club Management/i);
  expect(linkElement).toBeInTheDocument();
});

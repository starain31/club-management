import React from 'react';
import { render, screen } from '@testing-library/react';
import App, {Heading} from './App';

test('Render Club Management header.', () => {
  render(<App />);
  const linkElement = screen.getByText(/Club Management/i);
  expect(linkElement).toBeInTheDocument();
});

test('Render "Heading"', () => {
  render(<Heading title={`Club Management`}/>);
  const linkElement = screen.getByText(/Club Management/i);
  expect(linkElement).toBeInTheDocument();
});

test('Render "Heading" with argument', () => {
  render(<Heading title={`Club Management`}/>);
  const linkElement = screen.getByText(/Club Management/i);
  expect(linkElement).toBeInTheDocument();
});

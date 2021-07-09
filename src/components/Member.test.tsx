import { render, screen } from "@testing-library/react";
import { Member } from "./Member";

const member = {
  name: "Alan Kay",
  born: 'May 17, 1940',
  bio: 'Alan Curtis Kay is an American computer scientist.',
  id: "1",
};

test("Member should render name", () => {
  render(<Member member={member} />);
  expect(screen.getByText('Alan Kay')).toBeInTheDocument();

});

test("Member should render born", () => {
  render(<Member member={member} />);
  expect(screen.getByText('May 17, 1940')).toBeInTheDocument();

});

test("Member should render bio", () => {
  render(<Member member={member} />);
  expect(screen.getByText('Alan Curtis Kay is an American computer scientist.')).toBeInTheDocument();

});



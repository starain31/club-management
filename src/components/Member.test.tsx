import { render, screen } from "@testing-library/react";
import { Member } from "./Member";

test("Member should render name", () => {
  const member = {
    name: "Alan Kay",
    born: 'May 17, 1940',
    id: "1",
  };

  render(<Member member={member} />);
  expect(screen.getByText('Alan Kay')).toBeInTheDocument();

});

test("Member should render born", () => {
  const member = {
    name: "Alan Kay",
    born: 'May 17, 1940',
    id: "1",
  };

  render(<Member member={member} />);
  expect(screen.getByText('May 17, 1940')).toBeInTheDocument();

});

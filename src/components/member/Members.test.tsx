import { render, screen } from "@testing-library/react";
import { Members } from "./Members";

test("Members should be listed", () => {
  const members = [
    {
      name: "Alan Kay",
      id: "1",
    },
    {
      name: "Edsger W. Dijkstra",
      id: "2",
    },
  ];

  render(<Members members={members} />);

  expect(screen.getAllByTestId("member").length).toBe(2);
});

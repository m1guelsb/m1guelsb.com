import { render, screen } from "@testing-library/react";
import { Header } from "..";

it("should render logo and navigation", () => {
  render(<Header />);

  expect(screen.getByAltText("m1guelsb-logo")).toBeInTheDocument();
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});

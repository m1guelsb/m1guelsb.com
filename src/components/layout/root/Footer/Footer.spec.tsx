import { render, screen } from "@testing-library/react";
import { Footer } from "..";

it("should render logo and navigation", () => {
  render(<Footer />);

  expect(screen.getByAltText("m1guelsb-logo")).toBeInTheDocument();
});

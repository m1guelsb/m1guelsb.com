import { render, screen } from "@testing-library/react";
import { Nav } from "./Nav";

it("should render with all nav links", () => {
  render(<Nav />);

  expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
    "href",
    "/blog"
  );
  expect(screen.getByRole("link", { name: "Projetos" })).toHaveAttribute(
    "href",
    "/projects"
  );
  expect(screen.getByRole("link", { name: "Sobre mim" })).toHaveAttribute(
    "href",
    "/about"
  );
});

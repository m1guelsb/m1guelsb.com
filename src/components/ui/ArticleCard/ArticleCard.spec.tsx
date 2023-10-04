import { render, screen } from "@testing-library/react";
import { ArticleCard, ArticleCardProps } from "..";

it("should have render correctly", () => {
  const { title, brief }: ArticleCardProps = {
    title: "Custom Hooks in React",
    brief: "Article about custom hooks",
  };
  const hrefTitle = title.replaceAll(" ", "-").toLowerCase();

  render(<ArticleCard title={title} brief={brief} />);

  expect(screen.getByRole("listitem")).toBeInTheDocument();
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(brief)).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveAttribute(
    "href",
    `/blog/${hrefTitle}`
  );
});

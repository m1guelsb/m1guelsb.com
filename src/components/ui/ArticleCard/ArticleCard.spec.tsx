import { render, screen } from "@testing-library/react";
import { ArticleCard, ArticleCardProps } from "..";

it("should have render correctly", () => {
  const { title, brief, categories }: ArticleCardProps = {
    title: "Custom Hooks in React",
    brief: "Article about custom hooks",
    categories: [
      { id: 1, title: "ReactJS" },
      { id: 2, title: "Typescript" },
    ],
  };
  const hrefTitle = title.replaceAll(" ", "-").toLowerCase();

  render(<ArticleCard title={title} categories={categories} brief={brief} />);

  expect(screen.getByRole("listitem")).toBeInTheDocument();
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(brief)).toBeInTheDocument();
  expect(screen.getByText(categories[0].title)).toBeInTheDocument();
  expect(screen.getByText(categories[1].title)).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveAttribute(
    "href",
    `/blog/${hrefTitle}`
  );
});

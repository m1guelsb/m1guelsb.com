import { articles } from "./articles";
import { notFound } from "next/navigation";

export const findArticlesByCategories = (
  categoriesSearchParams: string | undefined
) => {
  const searchParamsValues = categoriesSearchParams?.split(",").slice(1);

  const filteredArticles = articles.filter((item) => {
    return searchParamsValues?.some((param) =>
      item.categories?.some((category) => category.title === param)
    );
  });

  if (searchParamsValues?.length && !filteredArticles.length) return notFound();

  const articlesResult =
    filteredArticles.length > 0 ? filteredArticles : articles;

  return { articles: articlesResult };
};

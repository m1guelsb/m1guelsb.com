import { ArticlesList, CategoriesList } from "@/components/layout/blog";
import { Article, Category, PaginationResponse } from "@/types";

export const metadata = {
  title: "Blog | m1guelsb",
  description: "Tech articles",
};

export default async function Blog({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const categoriesParams = searchParams as { [key: string]: string };

  const categoriesData = getCategories();
  const articlesData = getArticles(categoriesParams);

  const [categories, articles] = await Promise.all([
    categoriesData,
    articlesData,
  ]);

  return (
    <section className="flex flex-col gap-[2rem]">
      <CategoriesList categoriesData={categories} />
      <ArticlesList articlesData={articles} />
    </section>
  );
}

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const categories: Category[] = await res.json();
  return categories;
}

async function getArticles({ categories }: { [key: string]: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles?categories=${
      categories || ""
    }&size=20`,
    {
      next: {
        revalidate: 3600, //1h
      },
    }
  );
  const articles: PaginationResponse<Article> = await res.json();
  return articles;
}

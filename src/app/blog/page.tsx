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
  const categories = searchParams as { [key: string]: string };

  const categoriesData: Category[] = await getCategories();
  const articlesData: PaginationResponse<Article> = await getArticles(
    categories
  );

  return (
    <section className="flex flex-col gap-[2rem]">
      <CategoriesList categoriesData={categoriesData} />
      <ArticlesList articlesData={articlesData} />
    </section>
  );
}

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
    cache: "default",
  });
  return res.json();
}

async function getArticles({ categories }: { [key: string]: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles?categories=${
      categories || ""
    }&size=20`,
    { cache: "no-cache" }
  );
  return res.json();
}

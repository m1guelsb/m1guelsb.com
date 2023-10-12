import { ArticlesList, CategoriesList } from "@/components/layout/blog";
import { Article, Category } from "@/types";

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

  return (
    <section className="flex flex-col gap-[2rem]">
      {/* <CategoriesList categoriesData={categories} />
      <ArticlesList articlesData={articles} /> */}
    </section>
  );
}

import { ArticlesList, CategoriesList } from "@/components/layout/blog";
import { categories } from "@/mdx-database/categories";
import { findAllArticles } from "@/mdx-database/findAllArticles";

export const metadata = {
  title: "Blog | m1guelsb",
  description: "Tech articles",
};

export default async function Blog({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { categories: string | undefined };
}) {
  const { articles } = findAllArticles({
    categoriesQueryParams: searchParams.categories,
  });

  return (
    <section className="flex flex-col gap-[2rem]">
      <CategoriesList categoriesData={categories} />

      <div className="flex flex-col gap-[1rem]">
        <div className="flex justify-between items-center">
          <h2 className="text-lg laptop:text-xl">Artigos</h2>
          <span className="text-text2">{articles?.length} artigos</span>
        </div>
        <ArticlesList articlesData={articles} />
      </div>
    </section>
  );
}

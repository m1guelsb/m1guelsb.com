import { ArticleCard } from "@/components/ui";
import { Article, PaginationResponse } from "@/types";

async function getArticles() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles?size=20`,
    { cache: "no-cache" }
  );
  return res.json();
}

export const ArticlesList = async () => {
  const articlesData: PaginationResponse<Article> = await getArticles();

  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="flex justify-between items-center">
        <h3>Artigos</h3>
        <span className="text-text2">
          {articlesData?.totalElements} artigos
        </span>
      </div>

      <div className="grid grid-cols-2 gap-[1rem]">
        {articlesData?.content.map(({ id, title, brief, categories }) => (
          <ArticleCard
            key={id}
            title={title}
            brief={brief}
            categories={categories}
          />
        ))}
      </div>
    </div>
  );
};

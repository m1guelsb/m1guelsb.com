import { ArticleCard } from "@/components/ui";
import { Article, PaginationResponse } from "@/types";

interface ArticlesListProps {
  articlesData: PaginationResponse<Article>;
}
export const ArticlesList = ({ articlesData }: ArticlesListProps) => {
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

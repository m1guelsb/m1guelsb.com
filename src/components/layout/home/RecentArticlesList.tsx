import Link from "next/link";
import { ArticleCard, Button } from "@/components/ui";
import { Article, PaginationResponse } from "@/types";
import { ChevronRightIcon } from "@radix-ui/react-icons";

async function getRecentArticles() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles?size=4&sort=desc`,
    { cache: "no-cache" }
  );
  return res.json();
}

export const RecentArticlesList = async () => {
  const articlesData: PaginationResponse<Article> = await getRecentArticles();

  return (
    <div className="flex flex-col gap-[1rem]" aria-label="recent-articles">
      <div className="flex justify-between">
        <h2>Últimos artigos</h2>
        <Link href={"/blog"}>
          <Button variant={"secondary"}>
            Ver todos <ChevronRightIcon />
          </Button>
        </Link>
      </div>

      <div role="list" className="grid grid-cols-2 gap-[1rem]">
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

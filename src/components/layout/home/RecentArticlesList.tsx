import Link from "next/link";
import { ArticleCard, Button } from "@/components/ui";
import { Article, PaginationResponse } from "@/types";
import { ChevronRightIcon } from "@radix-ui/react-icons";

async function getRecentArticles() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles?size=4&sort=desc`,
    {
      next: {
        revalidate: 43200, //12h
      },
    }
  );
  const articlesData: PaginationResponse<Article> = await res.json();
  return articlesData;
}

export const RecentArticlesList = async () => {
  const articlesData = await getRecentArticles();

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
        {articlesData?.content.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Article, PaginationResponse } from "@/types";
import { parseTitleHref } from "@/utils/functions";
import { ArticleHero } from "@/components/layout/article";
import { ArticleBody, Summary } from "@/components/ui";
import { rehype } from "rehype";
import rehypeHighlight from "rehype-highlight";

export default async function ArticlePage({
  params,
}: {
  params: { article: string };
}) {
  const article = await getArticle(params.article);

  return (
    <section className="flex flex-col items-center laptop:items-start gap-[5rem]">
      <ArticleHero article={article} />

      <div className="grid grid-cols-1 laptop:grid-cols-[1fr_min-content] gap-[5rem]">
        <ArticleBody body={article.body} />
        <Summary articleBody={article.body} />
      </div>
    </section>
  );
}

async function getArticle(articleParam: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles/${articleParam}`,
    {
      next: {
        revalidate: 43200, //12h
      },
    }
  );

  if (res.status === 404) return notFound();

  const article: Article = await res.json();

  const highlightedBody = await rehype()
    .data("settings", { fragment: true })
    .use(rehypeHighlight, { aliases: { typescript: "typescriptreact" } })
    .process(article.body);

  const highlightedArticle = {
    ...article,
    body: String(highlightedBody),
  };

  return highlightedArticle;
}

export async function generateStaticParams() {
  const articles: PaginationResponse<Article> = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles?categories=&size=20`
  ).then((res) => res.json());

  return articles.content?.map((article) => ({
    article: parseTitleHref(article.title),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { article: string };
}): Promise<Metadata> {
  const article: Article = await getArticle(params.article);

  return {
    title: article.title,
    description: article.brief,
  };
}

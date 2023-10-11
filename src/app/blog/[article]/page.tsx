import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Article, PaginationResponse } from "@/types";
import { parseTitleHref } from "@/utils/functions";
import { ArticleHero } from "@/components/layout/article";
import { Summary } from "@/components/ui";
import { ArticleBody } from "@/components/ui/ArticleBody/ArticleBody";

export default async function ArticlePage({
  params,
}: {
  params: { article: string };
}) {
  const article: Article = await getArticle(params.article);

  return (
    <section className="flex flex-col gap-[5rem]">
      <ArticleHero article={article} />

      <div className="grid grid-cols-[1fr_20rem] gap-[4rem]">
        <ArticleBody body={article.body} />

        <Summary articleBody={article.body} />
      </div>
    </section>
  );
}

async function getArticle(articleParam: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles/${articleParam}`
  );

  if (res.status === 404) return notFound();
  return res.json();
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

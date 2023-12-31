import { Metadata } from "next";
import { articles } from "@/mdx-database/articles";
import { findArticleByTitle } from "@/mdx-database/findArticleByTitle";
import { ArticleHero } from "@/components/layout/article";
import { ArticleBody, Summary } from "@/components/ui";
import { parseTitleHref } from "@/utils/functions";

export default async function ArticlePage({
  params,
}: {
  params: { article: string };
}) {
  const { article } = findArticleByTitle(params.article);

  return (
    <section className="flex flex-col items-center laptop:items-start gap-[5rem]">
      <ArticleHero article={article} />

      <div className="grid grid-cols-1 laptop:grid-cols-[1fr_min-content] gap-[5rem]">
        <ArticleBody articlePath={article.body} />
        <Summary articleTopics={article.topics} />
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { article: string };
}): Promise<Metadata> {
  const { article } = findArticleByTitle(params.article);
  return {
    title: article.title,
    description: article.brief,
    keywords: article.categories.map(({ title }) => title),
    twitter: {
      creator: "m1guelsb",
      creatorId: "m1guelsb",
      images: [`/cover/${article.body}.png`],
      title: "m1guelsb",
      description: article?.brief,
    },
    openGraph: {
      url: "https://m1guelsb.com",
      images: [`/cover/${article.body}.png`],
      title: article.title,
      description: article.brief,
      type: "article",
      tags: article.categories.map(({ title }) => title),
    },
  };
}

export async function generateStaticParams() {
  return articles?.map((article) => ({
    article: parseTitleHref(article.title),
  }));
}

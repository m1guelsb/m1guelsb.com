import { ArticleHero } from "@/components/layout/article";
import { ArticleBody, Summary } from "@/components/ui";

export default async function ArticlePage({
  params,
}: {
  params: { article: string };
}) {
  return (
    <section className="flex flex-col items-center laptop:items-start gap-[5rem]">
      {/* <ArticleHero article={article} />

      <div className="grid grid-cols-1 laptop:grid-cols-[1fr_min-content] gap-[5rem]">
        <ArticleBody body={article.body} />
        <Summary articleBody={article.body} />
      </div> */}
    </section>
  );
}

export async function generateStaticParams({
  params,
}: {
  params: { article: string };
}) {
  return {
    article: params.article,
  };
}

// export async function generateMetadata({
//   params,
// }: {
//   params: { article: string };
// }): Promise<Metadata> {
//   return {
//     title: article.title,
//     description: article.brief,
//   };
// }

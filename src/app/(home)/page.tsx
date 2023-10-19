import { ArticlesList } from "@/components/layout/blog";
import { HeroSection } from "@/components/layout/home";
import { findAllArticles } from "@/mdx-database/findAllArticles";

export default async function Home() {
  const { articles } = findAllArticles({ size: 4 });

  return (
    <section className="flex flex-col gap-[2rem]">
      <HeroSection />
      <ArticlesList articlesData={articles} />
    </section>
  );
}

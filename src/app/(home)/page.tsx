import { ArticlesList } from "@/components/layout/blog";
import { HeroSection } from "@/components/layout/home";
import { articles } from "@/mdx-database/articles";

export default async function Home() {
  return (
    <section className="flex flex-col gap-[2rem]">
      <HeroSection />
      <ArticlesList articlesData={articles} />
    </section>
  );
}

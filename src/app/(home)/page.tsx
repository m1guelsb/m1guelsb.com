import { ArticlesList } from "@/components/layout/blog";
import { HeroSection } from "@/components/layout/home";

export default async function Home() {
  return (
    <section className="flex flex-col gap-[2rem]">
      <HeroSection />
      <ArticlesList articlesData={[]} />
    </section>
  );
}

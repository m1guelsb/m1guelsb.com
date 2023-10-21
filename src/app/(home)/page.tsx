import { ArticlesList } from "@/components/layout/blog";
import { HeroSection } from "@/components/layout/home";
import { Button } from "@/components/ui";
import { findAllArticles } from "@/mdx-database/findAllArticles";
import Link from "next/link";

export default async function Home() {
  const { articles } = findAllArticles({ size: 4 });

  return (
    <section className="flex flex-col gap-[2rem]">
      <HeroSection />

      <div className="flex flex-col gap-[1rem]">
        <div className="flex justify-between items-center">
          <h2 className="text-lg laptop:text-xl">Artigos recentes</h2>
          <Link href={"/blog"}>
            <Button variant={"secondary"}>Ver todos</Button>
          </Link>
        </div>

        <ArticlesList articlesData={articles} />
      </div>
    </section>
  );
}

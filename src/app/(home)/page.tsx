import { HeroSection, RecentArticlesList } from "@/components/layout/home";

export default async function Home() {
  return (
    <section className="flex flex-col gap-[2rem]">
      <HeroSection />
      <RecentArticlesList />
    </section>
  );
}

import { ArticlesList, CategoriesList } from "@/components/layout/blog";

export const metadata = {
  title: "Blog | m1guelsb",
  description: "Tech articles",
};

export default function Blog() {
  return (
    <section className="flex flex-col gap-[2rem]">
      <CategoriesList />
      <ArticlesList />
    </section>
  );
}

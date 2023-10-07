import { ArticleForm } from "@/components/layout/write";

export const metadata = {
  title: "Write | m1guelsb",
  description: "Tech articles",
};

export default async function WritePage() {
  return (
    <section className="flex flex-col gap-[2rem]">
      <h2>New Article</h2>

      <ArticleForm />
    </section>
  );
}

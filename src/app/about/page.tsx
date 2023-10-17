import { TechBubble } from "@/components/ui";
import { techs } from "@/techs-database";

export const metadata = {
  title: "About | m1guelsb",
  description: "More about me",
};

export default async function About() {
  return (
    <section className="flex flex-col gap-[2rem] overflow-hidden">
      {techs.map((tech) => (
        <TechBubble key={tech.title} {...tech} />
      ))}
    </section>
  );
}

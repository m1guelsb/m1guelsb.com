import Link from "next/link";
import { TechBubble } from "@/components/ui";
import { techs } from "@/skills";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export const metadata = {
  title: "About | m1guelsb",
  description: "More about me",
};

export default async function About() {
  return (
    <section className="grid grid-cols-2 py-8">
      <div className="h-full flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-8">
          <h1>Miguel Silva Barbosa</h1>
          <p>
            Desenvolvedor full stack com 2 anos de experiência. Autodidata
            apaixonado por tecnologia, design e games.
            <br />
            Sempre em busca de novas experiências e desafios! No momento
            expandindo conhecimentos de Clean Architecture, TDD, DDD e CI/CD.
          </p>
        </div>

        <div className="flex gap-4">
          {contacts.map(({ Icon, href }) => (
            <Link
              target="_blank"
              href={href}
              key={href}
              className="rounded-full hover:bg-background3 p-2 transition-colors"
            >
              <Icon className="h-8 w-8" />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8 items-end overflow-hidden">
        <h2>Skills</h2>
        <div className="flex flex-col gap-10">
          <div className="flex gap-6 flex-wrap justify-end">
            {techs
              .filter((tech) => tech.size === "lg")
              .map((tech) => (
                <TechBubble key={tech.title} {...tech} />
              ))}
          </div>

          <div className="flex gap-6 flex-wrap justify-end">
            {techs
              .filter((tech) => tech.size === "md")
              .map((tech) => (
                <TechBubble key={tech.title} {...tech} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const contacts = [
  {
    Icon: GitHubLogoIcon,
    href: "https://github.com/m1guelsb",
  },
  {
    Icon: LinkedInLogoIcon,
    href: "https://www.linkedin.com/in/miguel-s-barbosa/",
  },
  {
    Icon: TwitterLogoIcon,
    href: "https://x.com/m1guelsb",
  },
];

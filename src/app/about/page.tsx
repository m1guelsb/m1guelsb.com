import { TechBubble } from "@/components/ui";
import { techs } from "@/techs-database";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export const metadata = {
  title: "About | m1guelsb",
  description: "More about me",
};

export default async function About() {
  return (
    <section className="grid grid-cols-2 py-8">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <h1>Miguel Silva Barbosa</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ad
            eum fugiat deleniti asperiores hic similique molestiae ullam facere
            soluta vel cum, perspiciatis officia quod. Illo consectetur illum
            aliquam recusandae!
          </p>
        </div>

        <div className="flex gap-8">
          {contacts.map(({ Icon, href }) => (
            <Link target="_blank" href={href} key={href}>
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

          <div className="flex gap-6 flex-wrap justify-end">
            {techs
              .filter((tech) => tech.size === "sm")
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

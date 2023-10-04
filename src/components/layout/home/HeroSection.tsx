import Link from "next/link";
import { Button } from "@/components/ui";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Cat } from "@/components/ui";

export const HeroSection = () => {
  return (
    <div
      aria-label="hero"
      role="presentation"
      className="h-[31rem] w-full flex justify-between items-center"
    >
      <div className="w-[26rem] flex flex-col gap-4">
        <div className="flex flex-col">
          <h1>
            Eu sou <b className="text-accent">Miguel</b> {":)"}
          </h1>
          <h3>Desenvolvedor Fullstack e Designer nas horas vagas.</h3>
        </div>
        <div className="flex gap-[1rem]">
          <Link href={"https://www.github.com/m1guelsb"} target="_blank">
            <Button size={"large"}>
              <GitHubLogoIcon height={"24"} width={"24"} /> Github
            </Button>
          </Link>

          <Link
            href={"https://www.linkedin.com/in/miguel-s-barbosa"}
            target="_blank"
          >
            <Button variant={"outline"} size={"icon"}>
              <LinkedInLogoIcon height={"24"} width={"24"} />
            </Button>
          </Link>
        </div>
      </div>

      <Cat />
    </div>
  );
};

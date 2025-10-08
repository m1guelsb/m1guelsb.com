import Link from "next/link";
import { Button, Cat } from "@/components/ui";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export const HeroSection = () => {
  return (
    <div
      aria-label="hero"
      role="presentation"
      className="h-[31rem] w-full flex justify-between items-center"
    >
      <div className="w-[30rem] flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1>
            Eu sou <b className="text-accent">Miguel</b> {":)"}
          </h1>
          <p className="text-lg">
            Desenvolvedor Fullstack sempre em busca de novos desafios para transformar ideias em código e bugs em aprendizado.
          </p>
        </div>
        <div className="flex gap-[1rem]">
          <Link href={"https://www.github.com/m1guelsb"} target="_blank">
            <Button size={"large"}>
              <GitHubLogoIcon height={"24"} width={"24"} /> Github
            </Button>
          </Link>

          <Link
            href={"https://www.linkedin.com/in/m1guelsb"}
            target="_blank"
          >
            <Button variant={"outline"} size={"icon"}>
              <LinkedInLogoIcon height={"24"} width={"24"} />
            </Button>
          </Link>
        </div>
      </div>

      <Cat stateMachine="default" />
    </div>
  );
};

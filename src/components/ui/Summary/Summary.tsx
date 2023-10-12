import { parseSummaryTitles } from "@/utils/functions";
import { DotFilledIcon } from "@radix-ui/react-icons";

interface SummaryProps {
  articleBody: string;
}

export const Summary = ({ articleBody }: SummaryProps) => {
  return (
    <aside className="relative h-full flex flex-col gap-[2rem]">
      <nav className="sticky top-[4rem] flex flex-col gap-[2rem]">
        <h2>Sumário</h2>
        <ul className="flex flex-col gap-[1rem]">
          {parseSummaryTitles(articleBody).map((title) => (
            <li
              key={title}
              className="text-lg text-text2 flex items-center gap-[1rem]"
            >
              <DotFilledIcon className="text-text2 h-[1.5rem] w-[1.5rem]" />
              {title}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

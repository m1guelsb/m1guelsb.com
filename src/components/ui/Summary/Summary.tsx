"use client";
import { filterArticleSummary, parseTitleHref } from "@/utils/functions";

interface SummaryProps {
  articleBody: string;
}

export const Summary = ({ articleBody }: SummaryProps) => {
  return (
    <aside className="relative h-full flex flex-col gap-[3rem]">
      <nav className="sticky top-[4rem] flex flex-col gap-[1.5rem]">
        <h2>Sumário</h2>
        {filterArticleSummary(articleBody).map((title) => (
          <a
            key={title}
            className="text-lg text-text2 hover:text-text1 transition"
            href={`#${parseTitleHref(title!)}`}
          >
            {title}
          </a>
        ))}
      </nav>
    </aside>
  );
};

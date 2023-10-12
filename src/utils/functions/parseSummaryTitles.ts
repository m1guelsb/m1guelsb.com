import parse from "node-html-parser";

export const parseSummaryTitles = (articleBody: string) => {
  const doc = parse(articleBody);
  const titles = Array.from(doc.querySelectorAll("h2")).map(
    (h2) => h2.textContent
  );
  return titles;
};

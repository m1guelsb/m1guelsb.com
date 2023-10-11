"use client";

export const filterArticleSummary = (article: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(article, "text/html");

  const titles = Array.from(doc.querySelectorAll("h2")).map(
    (h2) => h2.textContent
  );

  return titles;
};

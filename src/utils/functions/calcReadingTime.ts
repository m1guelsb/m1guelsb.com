export const calculateReadingTime = (articleText: string) => {
  const wordCount = articleText.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / 200);
  return `${readingTimeMinutes}min de leitura`;
};

interface ArticleBodyProps {
  body: string;
}

export const ArticleBody = ({ body }: ArticleBodyProps) => {
  return <article className="article-body">{body}</article>;
};

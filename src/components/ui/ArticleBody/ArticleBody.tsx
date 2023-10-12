import { Interweave } from "interweave";
import { polyfill } from "interweave-ssr";
polyfill();
interface ArticleBodyProps {
  body: string;
}

export const ArticleBody = ({ body }: ArticleBodyProps) => {
  return (
    <Interweave className="article-body" tagName="article" content={body} />
  );
};

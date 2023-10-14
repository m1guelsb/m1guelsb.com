import { parseTitleHref } from "@/utils/functions";
import { Link2Icon } from "@radix-ui/react-icons";

interface TopicTitleProps {
  title: string;
}

export const TopicTitle = ({ title }: TopicTitleProps) => {
  return (
    <h2
      className="flex gap-2 items-center group relative"
      id={parseTitleHref(title)}
    >
      <span className="absolute left-[-2rem] child hidden group-hover:block bg-background3 p-1 rounded-md">
        <Link2Icon className="text-attention" />
      </span>
      <a href={`#${parseTitleHref(title)}`} className="no-underline font-bold">
        {title}
      </a>
    </h2>
  );
};

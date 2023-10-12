import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "@/components/ui";
import { Article } from "@/types";
import { parseTitleHref } from "@/utils/functions";
import { formatDate } from "../../../utils/functions/formatDate";

export interface ArticleCardProps extends Omit<Article, "body"> {}

export const ArticleCard = ({
  title,
  brief,
  categories,
  updatedAt,
}: ArticleCardProps) => {
  const hrefTitle = parseTitleHref(title);

  return (
    <Link
      href={`/blog/${hrefTitle}`}
      role="link"
      className="transition hover:-translate-y-1 focus-within:-translate-y-1"
    >
      <div
        role="listitem"
        className="h-[19rem] w-full p-[1.25rem] flex flex-col gap-[0.5rem] rounded-[1rem] bg-background2"
      >
        <h2>{title}</h2>

        <div className="flex gap-[1rem] flex-wrap">
          {categories.map(({ id, title }) => (
            <span
              className={buttonVariants({ size: "small", variant: "outline" })}
              key={id}
            >
              {title}
            </span>
          ))}
        </div>

        <p className="h-full w-full overflow-hidden text-ellipsis line-clamp-7">
          {brief}
        </p>

        <div className="w-full flex items-center justify-between">
          <span className="text-text2 text-sm">{formatDate(updatedAt!)}</span>
          <Button variant={"link"} size={"small"}>
            Ver mais <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </Link>
  );
};

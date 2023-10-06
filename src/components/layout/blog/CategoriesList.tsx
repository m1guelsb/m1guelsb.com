"use client";

import { Button } from "@/components/ui";
import { Category } from "@/types";
import { createUrl } from "@/utils/functions";
import { useSearchParams, useRouter } from "next/navigation";

interface CategoriesListProps {
  categoriesData: Category[];
}

export const CategoriesList = ({ categoriesData }: CategoriesListProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilterByCategory = (category: string) => {
    const categoryParam = category.toLowerCase();
    const newParams = new URLSearchParams(searchParams.toString());

    if (category) {
      newParams.set("categories", categoryParam);
    } else {
      newParams.delete("categories");
    }

    router.push(createUrl("/blog", newParams));
  };

  return (
    <div>
      {categoriesData?.length ? (
        <div className="flex flex-wrap gap-[1rem]">
          {categoriesData?.map(({ id, title }) => {
            return (
              <div
                key={id}
                className={
                  "transition hover:-translate-y-1 focus-within:-translate-y-1"
                }
              >
                <Button
                  onClick={() => handleFilterByCategory(title)}
                  variant={"secondary"}
                >
                  {title}
                </Button>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

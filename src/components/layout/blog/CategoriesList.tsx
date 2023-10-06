"use client";

import { Button } from "@/components/ui";
import { Category } from "@/types";
import { createUrl } from "@/utils/functions";
import { useSearchParams, useRouter } from "next/navigation";

interface CategoriesListProps {
  categoriesData: Category[];
}

export const CategoriesList = ({ categoriesData }: CategoriesListProps) => {
  const searchParamsHook = useSearchParams();
  const router = useRouter();

  const handleFilterByCategory = (category: string) => {
    const paramName = "categories";
    const paramValue = category;
    const searchParams = new URLSearchParams(searchParamsHook.toString());

    const currentValues = (searchParams.get(paramName) ?? "").split(",");
    const existsIndex = currentValues.indexOf(paramValue);

    if (existsIndex === -1) {
      currentValues.push(paramValue);
    } else {
      currentValues.splice(existsIndex, 1);
    }

    if (currentValues.length === 0) {
      searchParams.delete(paramName);
    } else {
      searchParams.set(paramName, currentValues.join(","));
    }

    router.push(createUrl("/blog", searchParams));
  };

  return (
    <div>
      {categoriesData?.length ? (
        <div className="flex flex-wrap gap-[1rem]">
          {categoriesData?.map(({ id, title }) => {
            return (
              <Button
                key={id}
                onClick={() => handleFilterByCategory(title)}
                variant={
                  searchParamsHook.get("categories")?.split(",").includes(title)
                    ? "primary"
                    : "secondary"
                }
              >
                {title}
              </Button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

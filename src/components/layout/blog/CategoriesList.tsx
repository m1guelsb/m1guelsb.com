"use client";

import { Button } from "@/components/ui";
import { useQueryParams } from "@/hooks";
import { Category } from "@/types";
import { useSearchParams } from "next/navigation";

interface CategoriesListProps {
  categoriesData: Category[];
}

export const CategoriesList = ({ categoriesData }: CategoriesListProps) => {
  const { handleParamValue } = useQueryParams({ paramName: "categories" });
  const searchParamsHook = useSearchParams();

  return (
    <div>
      {categoriesData?.length ? (
        <div className="flex flex-wrap gap-3  mt-10">
          {categoriesData?.map(({ id, title }) => {
            return (
              <Button
                key={id}
                onClick={() => handleParamValue(title)}
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

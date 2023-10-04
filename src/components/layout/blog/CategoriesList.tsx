import { Button } from "@/components/ui";
import { Category } from "@/types";

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
    cache: "no-cache",
  });
  return res.json();
}

export const CategoriesList = async () => {
  const categoriesData: Category[] = await getCategories();

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
                <Button variant={"secondary"}>{title}</Button>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

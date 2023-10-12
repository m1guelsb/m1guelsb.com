"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Article, articleSchema } from "@/types/Article";
import { Button, Input, MultipleSelect, TiptapEditor } from "@/components/ui";
import { useEffect, useState } from "react";
import { Category } from "@/types";
import { api } from "@/services/axios";
import { useRouter } from "next/navigation";

export const ArticleForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Article>({ resolver: zodResolver(articleSchema) });
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    api.get<Category[]>("/categories").then((res) => setCategories(res.data));
  }, []);

  const onSubmit: SubmitHandler<Article> = async (data) => {
    const payload = {
      ...data,
      categoryIds: data.categories.map((cat) => cat.id),
    };

    try {
      setIsLoading(true);
      await api.post("/articles", payload);
      push("/blog");
    } catch (err: any) {
      window.alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[2rem] px-[3rem]"
      >
        <div className="grid grid-cols-2 gap-[3rem]">
          <Input
            placeholder="Title"
            {...register("title")}
            errorMessage={errors.title?.message}
          />

          <Input
            placeholder="Brief"
            {...register("brief")}
            errorMessage={errors.brief?.message}
          />

          <Controller
            name="categories"
            control={control}
            render={({ field: { onChange } }) => (
              <span className="col-start-1 col-end-3">
                <MultipleSelect
                  placeholder="Categories:"
                  errorMessage={errors.categories?.message}
                  itemsList={categories.map(({ id, title }) => {
                    return {
                      id: id!,
                      label: title,
                    };
                  })}
                  onValueChange={(values) =>
                    onChange(
                      values?.map(({ id, label }) => {
                        return { id, title: label };
                      })
                    )
                  }
                />
              </span>
            )}
          />

          <Controller
            name="body"
            control={control}
            render={({ field: { onChange } }) => (
              <span className="w-full col-start-1 col-end-3">
                <TiptapEditor onChange={onChange} />
              </span>
            )}
          />
        </div>

        <Button className="self-center" disabled={isLoading} type="submit">
          Post article
        </Button>
      </form>
    </>
  );
};

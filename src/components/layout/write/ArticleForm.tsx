"use client";

import { Button, Input, MultipleSelect, TextArea } from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Article, articleSchema } from "@/types/Article";
export const ArticleForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Article>({ resolver: zodResolver(articleSchema) });
  const onSubmit: SubmitHandler<Article> = (data) => console.log(data);

  console.log("watch :>> ", watch("categories"));

  const itemsList = [
    { id: "book-1", label: "Harper Lee" },
    { id: "book-2", label: "Lev Tolstoy" },
    { id: "book-4", label: "Oscar Wilde" },
    { id: "book-5", label: "George Orwell" },
    { id: "book-6", label: "Jane Austen" },
    { id: "book-7", label: "Marcus Aurelius" },
    {
      id: "book-8",
      label: "Fyodor Dostoevsky",
    },
    { id: "book-9", label: "Lev Tolstoy" },
    { id: "book-10", label: "Fyodor Dostoevsky" },
  ];
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-[2rem]">
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
            render={({ field: { value, onChange } }) => (
              <MultipleSelect
                placeholder="Select categories"
                itemsList={itemsList}
                onValueChange={(value) => onChange(value)}
              />
            )}
          />

          <TextArea {...register("body")} errorMessage={errors.body?.message} />
        </div>

        <Button type="submit">Post article</Button>
      </form>
    </>
  );
};

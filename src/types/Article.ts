import z from "zod";
import { Category, categorySchema } from "./Category";

export type Article = {
  id?: number;
  title: string;
  body: string;
  brief: string;
  categories: Category[];
  createdAt?: string;
  updatedAt?: string;
};

export const articleSchema: z.ZodType<Article> = z.lazy(() =>
  z.object({
    id: z.number().optional(),
    title: z.string().nonempty({ message: "title is required" }),
    body: z.string().nonempty({ message: "body is required" }),
    brief: z.string().nonempty({ message: "brief is required" }),
    categories: z
      .array(categorySchema, {
        required_error: "should have at least 1 category",
      })
      .nonempty({ message: "should have at least 1 category" }),
  })
);

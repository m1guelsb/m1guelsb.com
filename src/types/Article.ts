import z from "zod";
import { Category, categorySchema } from "./Category";

export type Article = {
  id?: number;
  title: string;
  body: string;
  brief: string;
  categories: Category[];
};

export const articleSchema: z.ZodType<Article> = z.lazy(() =>
  z.object({
    id: z.number().optional(),
    title: z.string({ required_error: "title is required" }),
    body: z.string({ required_error: "body is required" }),
    brief: z.string({ required_error: "summary is required" }),
    categories: z.array(categorySchema),
  })
);

import { z } from "zod";

export type Category = {
  id?: number;
  title: string;
};

export const categorySchema: z.ZodType<Category> = z.object({
  id: z.number().optional(),
  title: z.string({ required_error: "title is required" }),
});

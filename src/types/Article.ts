import { Category } from "./Category";

export type Article = {
  id: number;
  title: string;
  body: string;
  brief: string;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
};

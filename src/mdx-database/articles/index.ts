import { Article } from "@/types";
import { categories } from "../categories";

export const articles: Article[] = [
  {
    id: 1,
    title: "Erros comuns de iniciantes em ReactJS",
    brief: "Aaaaaaaaaaaa",
    categories: [categories[0], categories[1]],
    topics: [
      "Propriedade style no JSX",
      "Acessar um valor que ainda não existe",
      "A propriedade key quando exibindo uma lista",
      "Verificando se uma lista está vazia",
    ],
    body: `react-beginner-mistakes.mdx`,
    createdAt: "2023-10-18",
    updatedAt: "2023-10-18",
  },
];

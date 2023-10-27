import { Article } from "@/types";
import { categories } from "../categories";

export const articles: Article[] = [
  {
    id: 1,
    title: "Erros comuns de iniciantes em ReactJS",
    brief:
      "Neste artigo revisamos as pegadinhas mais comuns do React, por que acontecem e como resolve-las. 🧐",
    categories: [
      categories.find((c) => c.title === "Javascript")!,
      categories.find((c) => c.title === "ReactJS")!,
    ],
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
  {
    id: 2,
    title: "Como tratar erros no spring boot",
    brief:
      "Veremos o jeito mais fácil de lidar com erros no Spring-boot, retornando mensagens formatadas e claras para o client.",
    categories: [
      categories.find((c) => c.title === "Java")!,
      categories.find((c) => c.title === "Spring-boot")!,
      categories.find((c) => c.title === "Tutorial")!,
    ],
    topics: [
      "A situação",
      "O problema",
      "Filtro global de exceções",
      "Receptando e tratando erros de validação",
      "Tratando outros tipos de erro",
    ],
    body: `handling-spring-exceptions.mdx`,
    createdAt: "2023-10-27",
    updatedAt: "2023-10-27",
  },
];

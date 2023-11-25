import { Article } from "@/types";
import { categories } from "../categories";

export const articles: Article[] = [
  {
    id: 1,
    title: "Erros comuns de iniciantes em ReactJS",
    brief:
      "Neste artigo revisamos as pegadinhas mais comuns do React, por que acontecem e como resolve-las. 🧐",
    categories: [
      categories.find(({ title }) => title === "Javascript")!,
      categories.find(({ title }) => title === "ReactJS")!,
    ],
    topics: [
      "Propriedade style no JSX",
      "Acessar um valor que ainda não existe",
      "A propriedade key quando exibindo uma lista",
      "Verificando se uma lista está vazia",
    ],
    body: `react-beginner-mistakes`,
    createdAt: "2023-10-18",
    updatedAt: "2023-10-18",
  },
  {
    id: 2,
    title: "Como tratar erros no spring boot",
    brief:
      "Neste tutorial veremos o jeito mais fácil de lidar com erros no Spring-boot retornando mensagens bonitas e claras para o usuário.🌹",
    categories: [
      categories.find(({ title }) => title === "Java")!,
      categories.find(({ title }) => title === "Spring-boot")!,
      categories.find(({ title }) => title === "Tutorial")!,
    ],
    topics: [
      "A situação",
      "O problema",
      "Filtro global de exceções",
      "Receptando e tratando erros de validação",
      "Tratando outros tipos de erro",
    ],
    body: `handling-spring-exceptions`,
    createdAt: "2023-10-27",
    updatedAt: "2023-10-27",
  },
  {
    id: 3,
    title: "Autenticação e autorização no Spring-Boot",
    brief:
      "Neste tutorial veremos o jeito mais fácil de lidar com erros no Spring-boot retornando mensagens bonitas e claras para o usuário.🌹",
    categories: [
      categories.find(({ title }) => title === "Java")!,
      categories.find(({ title }) => title === "Spring-boot")!,
      categories.find(({ title }) => title === "Tutorial")!,
    ],
    topics: [
      "Primeiros passos",
      "Entidade e repositório do usuário",
      "Token provider",
      "Security filter",
      "Auth configuration",
      "Auth DTOs",
      "Auth service",
      "Auth controller",
      "Testando a autenticação",
    ],
    body: `spring-auth`,
    createdAt: "2023-11-22",
    updatedAt: "2023-11-22",
  },
];

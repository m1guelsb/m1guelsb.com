export interface Tech {
  title: string;
  iconPath: string;
  size: "lg" | "md" | "sm";
  color: string;
}
export const techs: Tech[] = [
  {
    title: "Javascript",
    iconPath: "/techs/javascript.svg",
    size: "lg",
    color: "#f0db4f",
  },
  {
    title: "Typescript",
    iconPath: "/techs/typescript.svg",
    size: "lg",
    color: "#007acc",
  },
  {
    title: "Java",
    iconPath: "/techs/java.svg",
    size: "lg",
    color: "#cddbe5",
  },
  {
    title: "ReactJS",
    iconPath: "/techs/reactjs.svg",
    size: "md",
    color: "#ffffff",
  },
  {
    title: "NextJS",
    iconPath: "/techs/nextjs.svg",
    size: "md",
    color: "#ffffff",
  },
  {
    title: "Spring boot",
    iconPath: "/techs/spring.svg",
    size: "md",
    color: "#f3fbe9",
  },
  {
    title: "NodeJS",
    iconPath: "/techs/nodejs.svg",
    size: "md",
    color: "#f3fbe9",
  },
  {
    title: "NestJS",
    iconPath: "/techs/nestjs.svg",
    size: "md",
    color: "#f6bcc9",
  },
];

import { NavItem } from "./NavItem";

export const Nav = () => {
  return (
    <nav role="navigation" className="hidden phone:flex gap-10 items-center">
      <NavItem title="Blog" href="/blog" />
      <NavItem title="Projetos" href="/projects" />
      <NavItem title="Sobre mim" href="/about" />
    </nav>
  );
};

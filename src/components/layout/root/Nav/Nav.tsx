import { NavItem } from "./NavItem";

export const Nav = () => {
  return (
    <nav role="navigation" className="hidden phone:flex gap-8 items-center">
      <NavItem title="Blog" href="/blog" />
      <NavItem title="Sobre" href="/about" />
    </nav>
  );
};

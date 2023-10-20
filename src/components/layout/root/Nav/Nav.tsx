import { NavItem } from "./NavItem";

export const Nav = () => {
  return <DesktopNav />;
};

const DesktopNav = () => {
  return (
    <nav role="navigation" className="hidden phone:flex gap-8 items-center">
      <NavItem href="/blog">Blog</NavItem>
      <NavItem href="/about">Sobre</NavItem>
    </nav>
  );
};

import { HomeIcon, PersonIcon, ReaderIcon } from "@radix-ui/react-icons";
import { MobileNavItem } from "../Nav/MobileNavItem";

export const MobileNav = () => {
  return (
    <nav className="flex fixed phone:hidden bottom-0 py-2 w-full bg-background1 border-t border-accent rounded-md items-center justify-evenly translate-x-[-1rem] z-10">
      <MobileNavItem href="/">
        <HomeIcon className="h-5 w-5" />
      </MobileNavItem>
      <MobileNavItem href="/blog">
        <ReaderIcon className="h-5 w-5" />
      </MobileNavItem>
      <MobileNavItem href="/about">
        <PersonIcon className="h-5 w-5" />
      </MobileNavItem>
    </nav>
  );
};

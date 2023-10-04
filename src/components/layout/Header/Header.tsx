import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Nav } from "../Nav/Nav";
import Link from "next/link";

export const Header = () => {
  return (
    <header
      aria-label="header"
      className="h-[7.5rem] w-full flex justify-between"
    >
      <Link href={"/"} className="flex items-center">
        <Image
          priority
          style={{ userSelect: "none" }}
          draggable={false}
          src={Logo}
          alt="m1guelsb-logo"
          height={40}
        />
      </Link>

      <Nav />
    </header>
  );
};

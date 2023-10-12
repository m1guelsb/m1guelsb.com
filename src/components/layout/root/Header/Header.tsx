import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Nav } from "../Nav/Nav";
import Link from "next/link";

export const Header = () => {
  return (
    <header aria-label="header" className="h-24 w-full flex justify-between">
      <Link href={"/"} className="flex items-center">
        <button>
          <Image
            priority
            style={{ userSelect: "none" }}
            draggable={false}
            src={Logo}
            alt="m1guelsb-logo"
            height={40}
          />
        </button>
      </Link>

      <Nav />
    </header>
  );
};

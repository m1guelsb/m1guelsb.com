import Image from "next/image";
import Logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="h-[7.5rem] w-full flex items-center justify-between">
      <p>2023 - present | Miguel Barbosa</p>
      <Image
        priority
        style={{ userSelect: "none" }}
        draggable={false}
        src={Logo}
        alt="m1guelsb-logo"
        height={40}
      />
    </footer>
  );
};

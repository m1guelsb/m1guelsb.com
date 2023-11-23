import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden tablet:flex  h-32 gap-2 w-full items-center justify-between">
      <p>2023 - present | Miguel Barbosa</p>
      <Image
        priority
        style={{ userSelect: "none" }}
        draggable={false}
        src={"/logo.svg"}
        alt="m1guelsb-logo"
        height={40}
        width={146}
      />
    </footer>
  );
};

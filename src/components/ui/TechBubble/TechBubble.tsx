import Image from "next/image";
import { Tech } from "@/skills";

export const TechBubble = ({ title, iconPath, size, color }: Tech) => {
  return (
    <span
      className="flex flex-col items-center gap-1 select-none relative"
      style={{
        width: sizes[size] * 2,
      }}
      title={title}
    >
      <span
        style={{
          backgroundColor: color,
          height: sizes[size] * 2,
          width: sizes[size] * 2,
        }}
        className="flex items-center justify-center rounded-full h-12 w-12"
      >
        <Image
          draggable={false}
          alt={`icon-${title}`}
          src={iconPath}
          width={sizes[size]}
          height={sizes[size]}
        />
      </span>
      <p className="text-xs text-center">{title}</p>
    </span>
  );
};

const sizes = {
  lg: 32,
  md: 26,
  sm: 20,
};

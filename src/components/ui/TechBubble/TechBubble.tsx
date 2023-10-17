"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface TechBubbleProps {
  title: string;
  iconPath: string;
  size: number;
  color: string;
}

export const TechBubble = ({
  title,
  iconPath,
  size,
  color,
}: TechBubbleProps) => {
  return (
    <motion.span
      className="flex flex-col items-center gap-1"
      drag
      dragConstraints={{
        top: -50,
        left: -200,
        right: 200,
        bottom: 50,
      }}
    >
      <span
        style={{ backgroundColor: color }}
        className="flex items-center justify-center rounded-full h-12 w-12"
      >
        <Image
          draggable={false}
          alt={`icon-${title}`}
          src={iconPath}
          width={size}
          height={size}
        />
      </span>
      <p className="text-xs">{title}</p>
    </motion.span>
  );
};

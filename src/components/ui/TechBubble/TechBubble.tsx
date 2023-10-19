"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tech } from "@/techs-database";

export const TechBubble = ({ title, iconPath, size, color }: Tech) => {
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
      <p className="text-xs">{title}</p>
    </motion.span>
  );
};

const sizes = {
  lg: 32,
  md: 26,
  sm: 20,
};

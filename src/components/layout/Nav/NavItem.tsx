"use client";

import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";
import { usePathname } from "next/navigation";

interface NavItemProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof navItemVariants> {
  title: string;
  href: string;
}

export const NavItem = ({ title, href, className, ...props }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <Link role="link" href={href}>
      <span
        {...props}
        className={navItemVariants()}
        style={{
          color: pathname === href ? "#936DFF" : "#ffffff",
        }}
      >
        {title}
      </span>
    </Link>
  );
};

const navItemVariants = cva(
  ["text-text1", "hover:text-accent", "transition", "text-lg"],
  {
    variants: {
      isActive: {
        false: ["text-text1"],
        true: ["text-accent"],
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
);

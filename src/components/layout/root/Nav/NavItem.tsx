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
      <button
        {...props}
        className={navItemVariants({ isActive: pathname === href })}
      >
        {title}
      </button>
    </Link>
  );
};

const navItemVariants = cva(
  ["hover:text-accent", "focus-within:text-accent", "transition", "text-lg"],
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

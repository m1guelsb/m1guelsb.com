"use client";

import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";
import { usePathname } from "next/navigation";

interface NavItemProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof navItemVariants> {
  href: string;
}

export const MobileNavItem = ({ href, className, ...props }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      role="link"
      href={href}
      className="h-10 w-10 rounded-full flex items-center justify-center"
    >
      <button
        {...props}
        className={navItemVariants({ isActive: pathname === href })}
      />
    </Link>
  );
};

const navItemVariants = cva(
  [
    "w-10",
    "h-10",
    "flex",
    "items-center",
    "justify-center",
    "hover:text-accent",
    "focus-within:text-accent",
    "transition",
    "text-lg",
    "rounded-full",
  ],
  {
    variants: {
      isActive: {
        false: ["text-text1"],
        true: ["text-accent", "bg-background2"],
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
);

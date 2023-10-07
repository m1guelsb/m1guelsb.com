import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "text-text1",
    "rounded-md",
    "flex",
    "gap-2",
    "items-center",
    "justify-center",
    "font-medium",
    "transition",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-accent", "text-text1", "hover:bg-accent/90"],
        secondary: ["bg-background2", "text-text2", "hover:bg-accent/10"],
        link: ["bg-transparent", "text-text2", "hover:underline"],
        outline: ["bg-transparent", "border", "border-accent"],
      },
      size: {
        small: ["text-sm", "h-[2rem]", "px-[0.5rem]"],
        medium: ["text-base", "h-[2.5rem]", "px-[1rem]"],
        large: ["text-lg", "h-[3.5rem]", "px-[1.5rem]"],
        icon: ["h-[3.5rem]", "w-[3.5rem]"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        role="button"
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

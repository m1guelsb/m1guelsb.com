import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { ErrorMessage } from "..";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, errorMessage, ...props }, ref) => {
    return (
      <div>
        <input
          className={inputVariants({ variant, className })}
          ref={ref}
          {...props}
        />
        <ErrorMessage message={errorMessage} />
      </div>
    );
  }
);
Input.displayName = "Input";
export { Input };

const inputVariants = cva(
  ["flex", "items-center", "w-full", "h-[2.5rem]", "rounded-md", "px-[0.5rem]"],
  {
    variants: {
      variant: {
        default: ["border", "border-accent", "bg-background2"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

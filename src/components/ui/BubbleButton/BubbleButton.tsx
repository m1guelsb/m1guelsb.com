import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";

interface BubbleButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof bubbleButtonVariants> {}

export const BubbleButton = ({
  isActive,
  className,
  ...props
}: BubbleButtonProps) => {
  return (
    <button
      type="button"
      className={bubbleButtonVariants({ isActive, className })}
      {...props}
    />
  );
};

const bubbleButtonVariants = cva(
  [
    "h-[2rem]",
    "w-[2rem]",
    "flex",
    "items-center",
    "justify-center",
    "text-sm",
    "flex",
    "items-center",
    "gap-[0.5rem]",
    "font-medium",
    "leading-none",
  ],
  {
    variants: {
      isActive: {
        false: ["hover:text-text2", "hover:bg-background2"],
        true: ["bg-accent", "text-text1"],
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
);

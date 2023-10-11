import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ErrorMessage } from "..";

export interface TextareaProps
  extends ComponentProps<"textarea">,
    VariantProps<typeof TextareaVariants> {
  errorMessage?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, errorMessage, ...props }, ref) => {
    return (
      <div>
        <textarea
          className={TextareaVariants({ className })}
          ref={ref}
          {...props}
        />
        <ErrorMessage message={errorMessage} />
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
export { Textarea };

const TextareaVariants = cva([
  "bg-background2",
  "h-[18rem]",
  "w-full",
  "col-start-1",
  "col-end-3",
  "resize-none",
  "border",
  "border-accent",
  "rounded-md",
  "p-[0.5rem]",
]);

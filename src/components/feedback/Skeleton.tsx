import { VariantProps, cva } from "class-variance-authority";
import { Fragment } from "react";

export interface SkeletonProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  quantity: number;
}

export const Skeleton = ({ quantity, variant }: SkeletonProps) => {
  const skeletonArray = Array.from({
    length: quantity,
  });

  return (
    <Fragment>
      {skeletonArray.map((_, index) => (
        <div
          className={skeletonVariants({ variant })}
          key={index}
          role="status"
        />
      ))}
    </Fragment>
  );
};

const skeletonVariants = cva(["animate-pulse", "bg-background2"], {
  variants: {
    variant: {
      category: ["h-[2.5rem] ", "w-[7rem]", " rounded-[0.5rem]"],
      article_card: ["h-[19rem] ", "w-full", " rounded-[1rem]"],
    },
  },
  defaultVariants: {
    variant: "category",
  },
});

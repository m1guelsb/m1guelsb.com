"use client";

import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

interface CatProps {
  stateMachine: "default" | "404";
}
export const Cat = ({ stateMachine = "default" }: CatProps) => {
  const { RiveComponent } = useRive({
    src: "/cat.riv",
    stateMachines: stateMachine,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  return (
    <div
      role="figure"
      className="hidden tablet:block h-[28rem] w-[28rem] bg-background1"
    >
      <RiveComponent />
    </div>
  );
};

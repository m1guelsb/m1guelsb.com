"use client";

import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

export const Cat = () => {
  const { RiveComponent } = useRive({
    src: "/cat.riv",
    stateMachines: "default",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  return (
    <div role="figure" className="h-[28rem] w-[28rem] bg-background1">
      <RiveComponent />
    </div>
  );
};

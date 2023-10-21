import { Cat } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="h-full flex py-12 items-center justify-center tablet:justify-evenly">
      <span>
        <h1 style={{ fontSize: "9rem" }} className="text-4xl text-accent">
          404
        </h1>
        <h1 className="text-4xl">Not Found</h1>
      </span>
      <Cat stateMachine="404" />
    </div>
  );
}

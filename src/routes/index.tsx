import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>Hello "/"! world</div>
      <button className="btn">Button</button>
    </>
  );
}

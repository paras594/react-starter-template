import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/protected-route")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "protected-route"!</div>;
}

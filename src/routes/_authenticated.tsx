import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ location, context }) => {
    if (!context.auth.user) {
      throw redirect({
        to: "/",
        search: {
          redirect: location.href,
        },
      });
    } else {
      return {};
    }
  },
  shouldReload({ context }) {
    return !context.auth.user;
  },
  component: () => <Outlet />,
});

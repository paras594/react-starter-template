import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AuthContextType } from "../providers/auth-provider";
import PWABadge from "../shared/components/pwa-badge/PWABadge";

interface MyRouterContext {
  queryClient: QueryClient;
  auth: AuthContextType;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />

      <PWABadge />
      <TanStackRouterDevtools />
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </>
  ),
});

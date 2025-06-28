import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";
import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

export const queryClient = new QueryClient();

// Create a new router instance
export const router = createRouter({
  routeTree,
  defaultPendingComponent: () => (
    <div className={`p-2 text-2xl font-bold`}>
      <span>Loading...</span>
    </div>
  ),
  defaultErrorComponent: ({ error }) => (
    <div className={`p-2 text-2xl font-bold text-red-500`}>
      <span>Error: {error.message}</span>
    </div>
  ),
  context: {
    queryClient,
    auth: {
      user: null,
      loading: false,
    },
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);

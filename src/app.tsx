import { RouterProvider } from "@tanstack/react-router";
import { router } from "./main";
import { AuthProvider, useAuth } from "./providers/auth-provider";
import { FullscreenLoader } from "./shared/components/fullscreen-loader/fullscreen-loader";

function InnerApp() {
  const auth = useAuth();

  if (auth.loading) {
    return <FullscreenLoader />;
  }

  return <RouterProvider router={router} context={{ auth }} />;
}

export function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}

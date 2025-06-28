import { RouterProvider } from "@tanstack/react-router";
import { router } from "./main";
import { AuthProvider, useAuth } from "./providers/auth-provider";

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}

export function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}

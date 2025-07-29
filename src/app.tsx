import { RouterProvider } from "@tanstack/react-router";
import { router } from "./main";
import { AuthProvider, useAuth } from "./providers/auth-provider";

function InnerApp() {
  const auth = useAuth();

  if (auth.loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center p-4">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
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

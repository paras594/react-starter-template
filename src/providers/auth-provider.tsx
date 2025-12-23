import { createContext, PropsWithChildren, useContext, useState } from "react";

export type AuthContextType = {
  user: object | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user] = useState<object | null>(null);
  const [loading] = useState(false);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

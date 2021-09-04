import React, { useContext } from "react";
import { useSessionQuery } from "../lib/queries/auth/useSessionQuery";

const LoginContext = React.createContext({
  isAuthenticated: false,
  currentUser: null,
});

function useCurrentSession() {
  return useContext(LoginContext);
}

export function useCurrentUser() {
  const { currentUser } = useCurrentSession();
  // TODO: Remove "José da Silva" mock when dev proxy is finished
  return currentUser || { name: "José da Silva" };
}

export function useIsAuthenticated() {
  const { isAuthenticated } = useCurrentSession();
  return isAuthenticated;
}

export function LoginProvider({ children }) {
  const { data: currentUser, isLoading } = useSessionQuery();
  const isAuthenticated = !!currentUser;

  return (
    <LoginContext.Provider value={{ isAuthenticated, currentUser }}>
      {children}
    </LoginContext.Provider>
  );
}

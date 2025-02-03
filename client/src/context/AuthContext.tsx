import React, { createContext, useReducer } from "react";

type User = {
  username: string;
  email: string;
};

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
};

type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { isAuthenticated: false, user: null };
    default:
      return state;
  }
};

const AuthContext = createContext<
  { state: AuthState; dispatch: React.Dispatch<AuthAction> } | undefined
>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

import React, { createContext } from "react";
import useFirebase from "./../../Hooks/useFirebase";
export const AuthContext = createContext("auth");

const AuthProvider = ({ children }) => {
  const firebaseValue = useFirebase();
  return (
    <AuthContext.Provider value={firebaseValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

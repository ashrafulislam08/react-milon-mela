import { createContext } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    name: "Ashraful",
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

/**
 * 1. create a context with the null value;
 * 2. Create a provider
 * 3. set a value with something to provider (authInfo)
 * 4. use the AuthProvider in the main.jsx
 * 5. access the children inside the AuthProvider in the main.jsx
 */

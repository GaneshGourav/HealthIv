import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userdata, setUserdata] = useState([]);

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, isAuth, userdata, setUserdata }}
    >
      {children}
    </AuthContext.Provider>
  );
};

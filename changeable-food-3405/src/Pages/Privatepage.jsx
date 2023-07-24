import { useContext } from "react";
import { AuthContext } from "../Components/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivatePages = ({ children }) => {
  const isAuth = useContext(AuthContext);
  if (isAuth) {
    return <Navigate to="/signin" />;
  }
  return children;
};

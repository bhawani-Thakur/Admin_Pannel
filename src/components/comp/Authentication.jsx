import React, { useEffect, useState } from "react";
import { Navigate, replace } from "react-router-dom";

const Authentication = ({ children, redirectTo }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const  token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);  // If token exists, user is authenticated
    }
  }, []);
  
  if (isAuthenticated) {
   
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default Authentication;

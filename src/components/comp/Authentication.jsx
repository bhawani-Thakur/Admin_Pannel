import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ isProtected, children }) => {
  const authStatus = useSelector((state) => state.root.auth.authStatus);
  const [userToken, setUserToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      setUserToken(token); // Update state if token changes
    };

    window.addEventListener("storage", checkToken); // Listen for localStorage changes

    return () => {
      window.removeEventListener("storage", checkToken); // Cleanup on unmount
    };
  }, []);

  const isAuthenticated = authStatus && userToken;

  if (isAuthenticated && !isProtected) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  if (!isAuthenticated && isProtected) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

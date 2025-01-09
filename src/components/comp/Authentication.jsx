import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const userToken = localStorage.getItem("token");

const ProtectedRoute = ({ isProtected, children }) => {
  const authStatus = useSelector((state) => state.root.auth.authStatus);

  if (authStatus && !isProtected) {
    // Redirect authenticated users away from unprotected routes (e.g., login/signup)
    return <Navigate to="/admin/dashboard" replace />;
  }

  if (!authStatus && isProtected) {
    // Redirect unauthenticated users from protected routes
    return <Navigate to="/admin/login" replace />;
  }

  // Render the children if the route access is valid
  return children;
};

export default ProtectedRoute;

import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import { useAuthContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const { currentUser } = useAuthContext();
  console.log(currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;

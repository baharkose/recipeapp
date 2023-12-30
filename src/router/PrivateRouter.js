import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/login/Login";
import { useAuthContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const { currentUser } = useAuthContext();
  console.log(currentUser)
  return <>{currentUser ? <Outlet /> : <Login />}</>;
};

export default PrivateRouter;

import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/login/Login";

const PrivateRouter = () => {
  const user = true;
  return <>{user ? <Outlet /> : <Login />}</>;
};

export default PrivateRouter;

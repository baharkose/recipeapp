import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Register from "../pages/register/Register";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Register from "../pages/register/Register";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>
  </>
);

const AppRouter = () => {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />

      <Route path="" element={<PrivateRouter />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<Details />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;

import React from "react";
import Navbar from "../../Components/Header.jsx/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

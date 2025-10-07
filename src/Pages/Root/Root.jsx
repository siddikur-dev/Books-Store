import React from "react";
import Navbar from "../../Components/Header.jsx/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <Outlet className="max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1"></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;

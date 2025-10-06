import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../Components/Header.jsx/Navbar";
import Footer from "../Components/Footer/Footer";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div className="text-red-800 font-bold text-3xl text-center my-5">{error.message}</div>
      <Footer />
    </>
  );
};

export default ErrorPage;

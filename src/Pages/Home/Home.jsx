import React from "react";
import bookImg from "../../assets/books.jpg";
import Books from "../../Components/Books/Books";
// import { useLoaderData } from "react-router";

const Home = () => {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center bg-gray-100 rounded-2xl mt-8 md:mt-12 mx-4 md:mx-10 p-6 md:p-10 text-center md:text-left">
        {/* Left text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug md:leading-tight">
            Books to freshen up <br className="hidden md:block" /> your
            bookshelf
          </h1>
          <button className="btn bg-green-600 hover:bg-green-700 text-white px-6 md:px-8">
            View The List
          </button>
        </div>

        {/* Right image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={bookImg}
            alt="Book"
            className="w-48 sm:w-64 md:w-80 lg:w-96"
          />
        </div>
      </section>

      {/* Books */}
      <Books></Books>
    </div>
  );
};

export default Home;

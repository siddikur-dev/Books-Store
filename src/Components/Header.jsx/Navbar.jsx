import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="container mx-auto bg-white">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm px-4 md:px-10">
        {/* Left: Logo */}
        <div className="flex-1">
          <a className="text-xl md:text-2xl font-bold">Book Vibe</a>
        </div>

        {/* Center: Menu */}
        <div className="hidden md:flex flex-none">
          <ul className="menu menu-horizontal px-1 text-base font-medium">
            <li>
              <Link
                to={"/"}
                className="font-semibold text-green-600 border border-green-600 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to={"/listedBooks"} className="hover:text-green-600">
                Listed Books
              </Link>
            </li>
            <li>
              <a className="hover:text-green-600">Pages to Read</a>
            </li>
          </ul>
        </div>

        {/* Right: Auth Buttons */}
        <div className="hidden md:flex gap-3 ml-6">
          <button className="btn btn-sm bg-green-500 hover:bg-green-600 text-white rounded-md px-5">
            Sign In
          </button>
          <button className="btn btn-sm bg-cyan-400 hover:bg-cyan-500 text-white rounded-md px-5">
            Sign Up
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="text-green-600 font-semibold">Home</a>
            </li>
            <li>
              <a>Listed Books</a>
            </li>
            <li>
              <a>Pages to Read</a>
            </li>
            <li>
              <a className="text-green-600">Sign In</a>
            </li>
            <li>
              <a className="text-cyan-500">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

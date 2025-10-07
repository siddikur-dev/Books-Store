import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Listed Books", path: "/listed-books" },
    { name: "Pages to Read", path: "/pages-to-read" },
  ];

  return (
    <div className="container mx-auto bg-white">
      <div className="navbar bg-base-100 shadow-sm px-4 md:px-10">
        <div className="flex-1">
          <span className="text-xl md:text-2xl font-bold text-green-600">
            Books Store
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-none">
          <ul className="menu menu-horizontal px-1 text-base font-medium gap-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-green-600 border border-green-600 rounded-md px-3 py-1"
                      : "text-gray-600 hover:text-green-600 px-3 py-1"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right buttons */}
        <div className="hidden md:flex gap-3 ml-6">
          <button className="btn btn-sm bg-green-500 hover:bg-green-600 text-white rounded-md px-5">
            Sign In
          </button>
          <button className="btn btn-sm bg-cyan-400 hover:bg-cyan-500 text-white rounded-md px-5">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

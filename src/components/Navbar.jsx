import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-full mx-auto px-4 py-2 flex items-center">
        {/* Logo - Left side */}
        <a
          href="/"
          className="flex items-center space-x-2 hover:scale-105 hover:shadow-md transition duration-300 pr-2"
        >
          <img src="./Logo.jpeg" alt="Water.org" className="h-15 " />
          <span className="text-4xl font-bold text-bold  text-blue-600">
            S.A.F
          </span>
        </a>

        {/* Navigation Links  */}
        <div className="hidden md:flex space-x-10 ml-auto">
          <a
            href="#"
            className="text-xl text-gray-600 py-2  hover:text-blue-600"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-xl text-gray-600 py-2  hover:text-blue-600"
          >
            Our Impact
          </a>
          <a
            href="#"
            className="text-xl text-gray-600 py-2  hover:text-blue-600"
          >
            Solutions
          </a>
          <a
            href="#"
            className="text-xl text-gray-600 py-2  hover:text-blue-600"
          >
            Partners
          </a>
          <a
            href="#"
            className="text-xl bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:scale-105 hover:shadow-md transition duration-300"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden ml-auto text-gray-500 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

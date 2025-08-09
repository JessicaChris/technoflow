import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo stays left */}
        <img src="/images/logo-2.jpg" alt="Technoflow Logo" className="h-24 w-auto" />

        {/* Burger Icon on right only on mobile */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>

        {/* Menu Links */}
        <div
          className={`absolute top-full right-0 w-full md:w-auto bg-white md:bg-transparent md:static md:flex md:flex-row md:space-x-8 text-gray-700 font-medium text-sm md:text-base transition-transform duration-300 ${
            isOpen ? "flex flex-col" : "hidden md:flex"
          }`}
        >
          <Link
            to="/"
            className="block px-6 py-3 hover:text-blue-600 hover:underline border-b md:border-none"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="block px-6 py-3 hover:text-blue-600 hover:underline border-b md:border-none"
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            to="/gallery"
            className="block px-6 py-3 hover:text-blue-600 hover:underline border-b md:border-none"
            onClick={() => setIsOpen(false)}
          >
            GALLERY
          </Link>
          <Link
            to="/blog"
            className="block px-6 py-3 hover:text-blue-600 hover:underline border-b md:border-none"
            onClick={() => setIsOpen(false)}
          >
            BLOG
          </Link>
          <Link
            to="/contact"
            className="block px-6 py-3 hover:text-blue-600 hover:underline md:border-none"
            onClick={() => setIsOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



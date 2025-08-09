import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-1 py-2 flex justify-between items-center">
        <img src="/images/logo-2.jpg" alt="Technoflow Logo" className="h-36 w-auto" />
        <div className="space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 hover:underline">HOME</Link>
          <Link to="/about" className="hover:text-blue-600 hover:underline">ABOUT US</Link>
          <Link to="/gallery" className="hover:text-blue-600 hover:underline">GALLERY</Link>
          <Link to="/blog" className="hover:text-blue-600 hover:underline">BLOG</Link>
          <Link to="/contact" className="hover:text-blue-600 hover:underline">CONTACT US</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


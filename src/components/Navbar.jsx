
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <img src="/images/logo.png" alt="Technoflow Logo" className="h-24 w-auto" />
        <div className="space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 hover:underline">Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

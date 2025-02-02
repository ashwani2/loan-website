import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Vaitri Finance</h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-blue-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/emi-calculator" className="hover:text-blue-300 transition">
                EMI Calculator
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

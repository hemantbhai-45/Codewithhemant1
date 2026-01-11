import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`shadow-md w-full ${
        darkMode ? "bg-gray-900" : "bg-white"
      } fixed top-0 left-0 z-30`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Mobile Hamburger Icon */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`md:hidden focus:outline-none ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <Link
            to="/home"
            className={`text-2xl font-bold ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            CodeWithHemant
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-6 font-medium items-center ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>
            <Link to="/home" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/skill" className="hover:text-blue-400 transition">
              Skill
            </Link>
          </li>
          <li>
            <Link to="/project" className="hover:text-blue-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={`px-4 py-2 rounded-md hover:bg-blue-700 transition ${
                darkMode ? "bg-blue-700 text-white" : "bg-blue-600 text-white"
              }`}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className={`px-4 py-2 mx-3 rounded-md hover:bg-blue-700 transition ${
                darkMode ? "bg-blue-700 text-white" : "bg-blue-600 text-white"
              }`}
            >
              Signup
            </Link>
          </li>
        </ul>
        
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-40 transform transition-transform duration-300
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setMobileMenuOpen(false)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4">
          <li>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/home"
              className="hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/about"
              className="hover:text-blue-400"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/skill"
              className="hover:text-blue-400"
            >
              Skill
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/project"
              className="hover:text-blue-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/contact"
              className="hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/login"
              className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/signup"
              className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Signup
            </Link>
          </li>
        </ul>

       <div className="px-4 mt-4 flex justify-center md:hidden">
  <button
    onClick={() => setDarkMode(!darkMode)}
    className={`px-4 py-2 rounded-md border shadow-md transition
      ${darkMode
        ? "bg-gray-800 text-white border-gray-300 hover:bg-gray-700"
        : "bg-gray-100 text-gray-900 border-gray-600 hover:bg-gray-200"
      } whitespace-nowrap text-center`}
  >
    {darkMode ? "Light Mode" : "Dark Mode"}
  </button>
</div>

      </div>

      {/* Overlay when menu is open */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </nav>
  );
}

export default Navbar;

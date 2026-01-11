import React from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`shadow-md w-full ${darkMode ? "bg-gray-900" : "bg-white"} fixed top-0 left-0 z-40`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/home"
          className={`text-2xl font-bold ${darkMode ? "text-blue-400" : "text-blue-600"}`}
        >
          CodeWithHemant
        </Link>

        <ul
          className={`hidden md:flex gap-6 font-medium items-center ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li><Link to="/home" className="hover:text-blue-400 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition">About Me</Link></li>
          <li><Link to="/skill" className="hover:text-blue-400 transition">Skill</Link></li>
          <li><Link to="/project" className="hover:text-blue-400 transition">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
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

        {/* Mobile hamburger & toggle placeholder */}
        <div className="md:hidden flex items-center gap-4">
          {/* Hamburger icon */}
          <button
            className={`focus:outline-none ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
           <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-md border shadow-md transition
            ${darkMode
              ? "bg-gray-800 text-white border-gray-300 hover:bg-gray-700"
              : "bg-gray-100 text-gray-900 border-gray-600 hover:bg-gray-200"
            }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
        </div>
      </div>


     
    </nav>
  );
}

export default Navbar;

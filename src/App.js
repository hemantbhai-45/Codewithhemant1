import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import Chatbot from "./components/Chatbot";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  // Dark mode state with localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Tailwind dark mode
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div
        className={`min-h-screen ${
          darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Navbar
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-md border shadow-md text-sm md:text-base transition
      ${
        darkMode
          ? "bg-gray-800 text-white border-gray-300 hover:bg-gray-700"
          : "bg-gray-100 text-gray-900 border-gray-600 hover:bg-gray-200"
      }`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div> */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Chatbot /> {/* Chatbot component */}
      </div>
    </Router>
  );
}

export default App;

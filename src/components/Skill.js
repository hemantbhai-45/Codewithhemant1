import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Skill() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    "HTML", "CSS", "Tailwind CSS", "JavaScript", "React",
    "Node.js", "Express.js", "MongoDB",
    "Java (Android)", "Git", "Framer Motion", "localStorage"
  ];

  const skillInfo = {
    "HTML": "HTML (HyperText Markup Language) is used to structure web content.",
    "CSS": "CSS (Cascading Style Sheets) is used to style HTML content.",
    "Tailwind CSS": "Tailwind is a utility-first CSS framework for designing directly in markup.",
    "JavaScript": "JavaScript is a scripting language used to make websites interactive.",
    "React": "React is a JavaScript library for building user interfaces with components.",
    "Node.js": "Node.js allows running JavaScript on the server-side.",
    "Express.js": "Express is a minimal Node.js web application framework.",
    "MongoDB": "MongoDB is a NoSQL database for storing JSON-like documents.",
    "Java (Android)": "Java is used for Android app development and backend logic.",
    "Git": "Git is a version control system to track changes in source code.",
    "Framer Motion": "Framer Motion is a React library for animations.",
    "localStorage": "localStorage allows storing data in the browser locally."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Hemant's Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedSkill(skill)}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-3 px-4 rounded-xl text-center font-semibold shadow-md focus:outline-none"
            >
              {skill}
            </motion.button>
          ))}
        </div>

        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 p-6 bg-gray-100 rounded-xl shadow-inner"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedSkill}</h3>
            <p className="text-gray-700">{skillInfo[selectedSkill]}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Skill;

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    level: 95,
    color: "bg-orange-500",
    icon: <FaHtml5 size={40} className="text-orange-500" />,
  },
  {
    name: "CSS",
    level: 90,
    color: "bg-blue-500",
    icon: <FaCss3Alt size={40} className="text-blue-500" />,
  },
  {
    name: "Tailwind CSS",
    level: 90,
    color: "bg-cyan-500",
    icon: <SiTailwindcss size={40} className="text-cyan-500" />,
  },
  {
    name: "JavaScript",
    level: 88,
    color: "bg-yellow-500",
    icon: <FaJs size={40} className="text-yellow-400" />,
  },
  {
    name: "React",
    level: 90,
    color: "bg-sky-500",
    icon: <FaReact size={40} className="text-sky-500" />,
  },
  {
    name: "Node.js",
    level: 82,
    color: "bg-green-500",
    icon: <FaNodeJs size={40} className="text-green-500" />,
  },
  {
    name: "Express.js",
    level: 80,
    color: "bg-gray-700",
    icon: <SiExpress size={40} />,
  },
  {
    name: "MongoDB",
    level: 80,
    color: "bg-green-700",
    icon: <SiMongodb size={40} className="text-green-700" />,
  },
  {
    name: "Git",
    level: 85,
    color: "bg-red-500",
    icon: <FaGitAlt size={40} className="text-red-500" />,
  },
];

function Skill({ darkMode }) {
  return (
    <section
      className={`min-h-screen py-16 px-6 transition duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-purple-100 to-blue-200 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-6 shadow-xl border transition duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-center gap-4">
                {skill.icon}
                <div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                  <p>{skill.level}%</p>
                </div>
              </div>

              <div className="w-full h-3 bg-gray-300 rounded-full mt-5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className={`h-3 ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
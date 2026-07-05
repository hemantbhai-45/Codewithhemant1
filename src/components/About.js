import React from "react";

function About({ darkMode }) {
  return (
    <section
      className={`min-h-screen py-16 px-6 transition duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 to-purple-200 text-gray-900"
      }`}
    >
      <div
        className={`max-w-5xl mx-auto rounded-3xl shadow-2xl p-8 md:p-12 transition duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Photo */}
          <div className="flex-shrink-0">
            <img
              src="hemant1.png"
              alt="Hemant Tarde"
              className="w-52 h-52 rounded-full object-cover border-4 border-purple-500 shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2
              className={`text-4xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              💻 Developer - Hemant Tarde
            </h2>

            <p
              className={`italic mb-5 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Passionate Web Developer & Creative Designer
            </p>

            <p
              className={`leading-8 mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a passionate Computer Science student who loves building
              modern and responsive websites using HTML, CSS, Tailwind CSS,
              JavaScript, React, Node.js and MongoDB. My goal is to become a
              professional Full Stack Web Developer.
            </p>

            <h3
              className={`text-2xl font-semibold mb-3 ${
                darkMode ? "text-purple-400" : "text-purple-700"
              }`}
            >
              📚 Education
            </h3>

            <ul
              className={`space-y-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li>
                🎓 <strong>B.Sc. Computer Science</strong> (2024–2027)
                <br />
                R.C. Patel Science, Arts & Commerce College, Shirpur
              </li>

              <li>
                🎓 <strong>HSC</strong> (2023–2024)
                <br />
                Nutan Madhyamik Junior Science College
              </li>

              <li>
                🎓 <strong>SSC</strong> (2022–2023)
                <br />
                Nutan Madhyamik Vidyalaya
              </li>
            </ul>

            <div
              className={`mt-8 border-t pt-5 ${
                darkMode
                  ? "border-gray-700 text-gray-300"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              <p>📍 Dondaicha, Dhule, Maharashtra</p>
              <p>📧 hemanttarde04@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
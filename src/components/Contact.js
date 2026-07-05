import React from "react";

function Contact({ darkMode }) {
  return (
    <section
      className={`min-h-screen pt-24 flex items-center justify-center px-6 py-10 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-tr from-purple-300 via-pink-300 to-red-300 text-black"
      }`}
    >
      <div
        className={`w-full max-w-lg rounded-3xl border shadow-2xl p-8 md:p-10 transition-all duration-300 ${
          darkMode
            ? "bg-gray-800 border-gray-700 text-white"
            : "bg-white/90 border-gray-200 text-gray-800"
        }`}
      >
        <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-10">
          Get In Touch
        </h2>

        <div className="space-y-7">
          <div className="flex items-center">
            <span className="w-28 font-semibold text-purple-500">Name:</span>
            <span>Hemant Tarde</span>
          </div>

          <div className="flex items-center">
            <span className="w-28 font-semibold text-purple-500">Email:</span>
            <a
              href="mailto:hemanttarde04@gmail.com"
              className="text-blue-500 hover:underline break-all"
            >
              hemanttarde04@gmail.com
            </a>
          </div>

          <div className="flex items-center">
            <span className="w-28 font-semibold text-purple-500">Phone:</span>
            <a
              href="tel:+918766748365"
              className="hover:text-purple-500 transition"
            >
              +91 8766748365
            </a>
          </div>

          <div className="flex items-start">
            <span className="w-28 font-semibold text-purple-500">
              Address:
            </span>
            <address className="not-italic">
              Dondaicha
              <br />
              Maharashtra
              <br />
              India
            </address>
          </div>

          <div>
            <h3 className="font-semibold text-purple-600 mb-2">
              Additional Info
            </h3>

            <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
              Feel free to reach out for project collaborations, questions, or
              just a friendly hello. I'm always excited to connect with new
              people and work on exciting projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
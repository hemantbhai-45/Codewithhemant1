import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Batches({ darkMode }) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const batches = [
    {
      id: 1,
      title: "Python Programming",
      category: "Python",
      level: "Beginner",
      duration: "3 Months",
      price: "₹999",
      status: "Live",
    },
    {
      id: 2,
      title: "Advanced Python",
      category: "Python",
      level: "Intermediate",
      duration: "2 Months",
      price: "₹1499",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "C Programming",
      category: "C",
      level: "Beginner",
      duration: "2 Months",
      price: "₹699",
      status: "Live",
    },
    {
      id: 4,
      title: "C Programming with Projects",
      category: "C",
      level: "Intermediate",
      duration: "3 Months",
      price: "₹999",
      status: "Upcoming",
    },
    {
      id: 5,
      title: "C++ Programming",
      category: "C++",
      level: "Beginner",
      duration: "3 Months",
      price: "₹1199",
      status: "Live",
    },
    {
      id: 6,
      title: "C++ with DSA",
      category: "C++",
      level: "Advanced",
      duration: "4 Months",
      price: "₹1999",
      status: "Live",
    },
  ];

  const filteredBatches =
    filter === "All"
      ? batches
      : batches.filter((batch) => batch.category === filter);

  return (
    <section
      id="batches"
      className={`py-20 px-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-3">
          🚀 Our Coding Batches
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Learn Coding with Live Classes & Real Projects
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {["All", "Python", "C", "C++"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                filter === item
                  ? "bg-purple-600 text-white"
                  : "bg-white text-black border hover:bg-purple-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Batch Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBatches.map((batch) => (
            <div
              key={batch.id}
              className={`rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{batch.title}</h3>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    batch.status === "Live"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {batch.status}
                </span>
              </div>

              <p className="mb-2">📘 Level: {batch.level}</p>
              <p className="mb-2">⏳ Duration: {batch.duration}</p>

              <p className="mb-4 text-2xl font-bold text-purple-600">
                {batch.price}
              </p>

              <button
                onClick={() => navigate("/join")}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Batches;
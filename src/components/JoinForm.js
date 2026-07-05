import React, { useState } from "react";

function JoinForm({ darkMode }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    batch: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Registration Successful!");
    console.log(form);

    setForm({
      name: "",
      email: "",
      phone: "",
      college: "",
      course: "",
      batch: "",
      city: "",
      message: "",
    });
  };

  return (
    <section
      className={`min-h-screen py-16 px-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
      }`}
    >
      <div
        className={`max-w-2xl mx-auto rounded-2xl shadow-xl p-8 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-2">
          Join Our Coding Batch
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Fill the form and start your coding journey 🚀
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={form.college}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Course</option>
            <option>Python</option>
            <option>C Programming</option>
            <option>C++ Programming</option>
          </select>

          <select
            name="batch"
            value={form.batch}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Batch</option>
            <option>Morning</option>
            <option>Evening</option>
            <option>Weekend</option>
          </select>

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="message"
            placeholder="Why do you want to join?"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition"
          >
            Join Now 🚀
          </button>

        </form>
      </div>
    </section>
  );
}

export default JoinForm;
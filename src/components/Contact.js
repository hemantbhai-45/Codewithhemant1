import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-300 via-pink-300 to-red-300 flex items-center justify-center p-8">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl max-w-lg w-full p-10">
        <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-10">
          Get In Touch
        </h2>

        <div className="space-y-8 text-gray-800 text-base leading-relaxed">
          <div className="flex items-center gap-4">
            <span className="font-semibold w-28 text-purple-600">Name:</span>
            <span>Hemant Tarde</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-semibold w-28 text-purple-600">Email:</span>
            <a
              href="mailto:hemanttarde04@gmail.com"
              className="text-blue-600 hover:underline"
            >
              hemanttarde04@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-semibold w-28 text-purple-600">Phone:</span>
            <a href="tel:+919876543210" className="hover:text-purple-700">
              +91 8766748365
            </a>
          </div>

          <div className="flex items-start gap-4">
            <span className="font-semibold w-28 text-purple-600">Address:</span>
            <address className="not-italic">
              123, Vasudha Nagar <br />
              Dondaicha, Maharashtra <br />
              India - 411001
            </address>
          </div>

          <div>
            <h3 className="font-semibold text-purple-700 mb-2">Additional Info</h3>
            <p>
              Feel free to reach out for project collaborations, questions, or just a friendly hello! 
              I’m always excited to connect with new people and discuss ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

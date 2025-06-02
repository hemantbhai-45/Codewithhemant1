import React from 'react';


function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-8 flex flex-col md:flex-row items-center gap-8">
        
        {/* Photo Section */}
        <div className="flex-shrink-0">
          <img
            src={"hemant.png"} 
            alt="Hemant Tarde"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-400 shadow"
          />
        </div>

        {/* Info Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">💻 Developer - Hemant Tarde</h2>
          <p className="text-gray-600 text-sm italic mb-4">Passionate Web Developer & Creative Designer</p>

          <p className="text-gray-700 mb-4">
            I'm a passionate and dedicated student focused on becoming a skilled full-stack web developer.
            I enjoy creating responsive websites and modern UI using HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, and MongoDB.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">📚 Education</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>B.Sc. (Computer Science)</strong> – R.C. Patel Science, Arts and Commerce College, Shirpur (2024–2027)</li>
            <li><strong>HSC</strong> – Nutan Madhyamik Junior Science College, Maharashtra Board (2023–2024)</li>
            <li><strong>SSC</strong> – Nutan Madhyamik Vidyalaya, Maharashtra Board (2022–2023)</li>
          </ul>

          <div className="mt-4 text-sm text-gray-600">
            📍 Dondaicha, Dist: Dhule, Taluka: Shindkheda, Maharashtra <br />
            📧 hemanttarde04@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

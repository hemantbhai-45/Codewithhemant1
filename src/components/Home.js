import React from 'react';

function Home({ darkMode }) {

  const features = [
    { title: 'Live Code Editor', desc: 'Write and preview HTML, CSS, and JS in real-time.' },
    { title: 'Daily Challenges', desc: 'Sharpen your skills with new coding challenges daily.' },
    { title: 'Project Ideas', desc: 'Build real-world projects with guided instructions.' },
    { title: 'Learning Roadmaps', desc: 'Step-by-step paths for frontend, backend, and more.' },
    { title: 'Interview Prep', desc: 'Get ready with top questions and coding quizzes.' },
    { title: 'Community Forum', desc: 'Ask doubts, share knowledge, and connect with others.' },
  ];

  return (
    <div
      className={`transition duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Learn, Code & Grow - From Home!
        </h1>
        <p className="text-xl mb-6">
          Your personal coding companion, anytime, anywhere.
        </p>
        <button className="bg-white text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          Start Coding
        </button>
      </section>

      {/* Features Section */}
      <section
        className={`py-16 px-6 max-w-7xl mx-auto ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          What You'll Find Here
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow ${
                darkMode
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 text-center ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <h2 className="text-3xl font-bold mb-10">
          Our Community in Numbers
        </h2>
        <div className="flex flex-wrap justify-center gap-8 text-xl font-semibold">
          <div>👨‍💻 5,000+ Learners</div>
          <div>💡 100+ Projects</div>
          <div>🏆 300+ Certificates</div>
        </div>
      </section>

      {/* Daily Tip */}
      <section className="py-10 px-6 max-w-3xl mx-auto text-center">
        <blockquote
          className={`italic text-lg p-6 rounded-xl ${
            darkMode ? 'bg-indigo-900' : 'bg-indigo-100'
          }`}
        >
          💡 Tip of the Day: "JavaScript मध्ये arrays dynamic असतात."
        </blockquote>
      </section>

      {/* Testimonials */}
      <section
        className={`py-16 px-6 text-center ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <h2 className="text-3xl font-bold mb-10">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`p-6 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <p>“CodeWithHemant ने मला coding fundamentals समजायला खूप मदत केली.”</p>
            <p className="mt-2 font-semibold">– Hemant</p>
          </div>

          <div className={`p-6 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <p>“Projects आणि challenges ने माझी तयारी मजबूत झाली.”</p>
            <p className="mt-2 font-semibold">– Priya</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Coding Journey Now!
        </h2>
        <p className="mb-6">
          Join thousands of learners and build your skills at your pace.
        </p>
        <button className="bg-white text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer
        className={`py-6 px-4 text-center text-sm ${
          darkMode ? 'bg-gray-800' : 'bg-gray-100'
        }`}
      >
        <p>&copy; 2025 CodeWithHemant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

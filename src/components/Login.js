import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Login() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(""); // ✅ Fixed: Store OTP
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate("/home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      navigate("/home"); // ✅ Login Success
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 mb-1">Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter mobile number"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              maxLength={10}
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">OTP</label>
            <input
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              maxLength={6}
            />
            <button
              type="button"
              onClick={() => {
                const generated = Math.floor(100000 + Math.random() * 900000);
                alert(`Your OTP is: ${generated}`); // Only for development
                setGeneratedOtp(generated.toString()); // ✅ Store OTP
                setOtp(""); // Clear input
              }}
              className="w-full mt-2 bg-blue-200 text-blue-700 font-medium py-2 rounded-lg hover:bg-blue-300 transition"
            >
              Send OTP
            </button>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition duration-300"
          >
            Verify & Login
          </motion.button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          We’ll send an OTP to your number
        </p>

        <p className="text-center text-gray-700 mt-6 text-sm">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-600 hover:text-purple-600 font-semibold transition"
          >
            Signup here
          </button>
        </p>

        <div className="text-center mt-6">
          <button
            onClick={handleSkip}
            className="text-gray-600 hover:text-gray-900 underline"
          >
            Skip
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;

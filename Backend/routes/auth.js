const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const otpGenerator = require("otp-generator");
const User = require("../models/User");

let otpStore = {};

// Signup route
router.post("/signup", async (req, res) => {
  const { email, phone, password, confirmPassword } = req.body;

  if (!email || !phone || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const userExists = await User.findOne({ $or: [{ email }, { phone }] });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, phone, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("SIGNUP ERROR 👉", err);
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }

  // try {
  //     const userExists = await User.findOne({ $or: [{ email }, { phone }] });
  //     if (userExists) return res.status(400).json({ message: 'User already exists' });

  //     const hashedPassword = await bcrypt.hash(password, 10);
  //     const user = new User({ email, phone, password: hashedPassword });
  //     await user.save();
  //     res.status(201).json({ message: 'User registered successfully' });
  // } catch (err) {
  //     res.status(500).json({ message: 'Server error' });
  // }
});

//otp gereration route will stop here
router.post("/login/send-otp", async (req, res) => {
  const { phone } = req.body;

  try {
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const otp = otpGenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });

    otpStore[phone] = otp;

    // ✅ TESTING PURPOSE
    console.log("OTP:", otp);

    return res.json({
      message: "OTP generated (SMS disabled for testing)",
      otp,
    });
  } catch (err) {
    console.error("Send OTP Error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

// // Send-otp route used to send OTP to user's phone number so that they can login

// router.post('/login/send-otp', async (req, res) => {
//     const { phone } = req.body;

//     try {
//         const user = await User.findOne({ phone });
//         if (!user) return res.status(404).json({ message: 'User not found' });

//         const otp = otpGenerator.generate(6, {
//             digits: true,
//             alphabets: false,
//             upperCase: false,
//             specialChars: false
//         });

//         otpStore[phone] = otp;

//         console.log('OTP to send:', otp);
//         console.log('phone:', phone);

//         const response = await axios.post('https://www.fast2sms.com/dev/bulkV2', {
//             variables_values: otp,
//             route: 'otp',
//             numbers: phone
//         }, {
//             headers: {
//                 authorization: process.env.FAST2SMS_API_KEY,
//                 'Content-Type': 'application/json'
//             }
//         });

//         console.log('SMS Response:', response.data);

//         if (response.data.return === true) {
//             res.json({ message: 'OTP sent successfully' });
//         } else {
//             res.status(500).json({ message: 'Failed to send OTPp', detail: response.data });
//         }
//     } catch (err) {
//         console.error('OTP Send Error:', err.response?.data || err.message || err);
//         res.status(500).json({ message: 'Failed to send OTP', error: err.response?.data || err.message });
//     }
// });

// Verify OTP and login
router.post("/login/verify-otp", async (req, res) => {
  const { phone, otp } = req.body;

  if (otpStore[phone] !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  delete otpStore[phone];

  try {
    const user = await User.findOne({ phone });
    if (!user) return res.status(404).json({ message: "User not found" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Login error" });
  }
});

module.exports = router;

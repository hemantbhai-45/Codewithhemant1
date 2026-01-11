const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Check if API key exists
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY missing in .env file!");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/", async (req, res) => {
  try {
    const userMsg = req.body.message;
    console.log("User message:", userMsg); // Debug

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
You are CodeWithHemant AI Assistant.
Answer in simple Hinglish.
Help students with web development, coding, projects.
Question: ${userMsg}
    `;

    const result = await model.generateContent(prompt);

    // Debug: check API response
    console.log("Gemini API response:", result);

    const reply = result.response?.text() || "Sorry, kuch error aala.";
    res.json({ reply });
  } catch (err) {
    console.error("❌ Gemini API Error:", err); // Full error
    res.status(500).json({ error: "We will be at your service very soon." });
  }
});

module.exports = router;

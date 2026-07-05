const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY missing in .env file!");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/", async (req, res) => {
  try {
    const userMsg = req.body.message;
    if (!userMsg) return res.status(400).json({ error: "Message is required" });

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
You are CodeWithHemant AI Assistant.
Answer in simple Hinglish.
Help students with web development, coding, projects.
Question: ${userMsg}
    `;

    const result = await model.generateContent(prompt);

    // Debug: remove in production
    console.log("Gemini API response:", result);

    const reply = result.response?.text() || "Sorry, kuch error aala.";
    res.json({ reply });
  } catch (err) {
    console.error("❌ Gemini API Error:", err);
    res.status(500).json({ error: "We will be at your service very soon." });
  }
});

module.exports = router;

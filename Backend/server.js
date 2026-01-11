const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const chatRoutes = require("./routes/chat"); // 👈 chatbot route

const path = require("path");
dotenv.config({ path: path.join(__dirname, ".env") });

// DB connect
connectDB();

// App initialize FIRST
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes AFTER app init
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes); // 👈 FIX HERE

// Port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

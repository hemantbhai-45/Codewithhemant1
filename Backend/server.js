const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const path = require('path');
dotenv.config({ path: path.join(__dirname, '.env') });


console.log('Mongo URI:', process.env.MONGO_URI); // ✅ debug (temporary)
connectDB(); // ✅ DB connect before server start

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // ✅ routes correct

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

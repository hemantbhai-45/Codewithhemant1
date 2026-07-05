require('dotenv').config();
const axios = require('axios');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

axios.get('https://api.gemini.com/v1/some_endpoint', {
  headers: {
    'X-GEMINI-APIKEY': GEMINI_API_KEY
  }
})
.then(res => console.log('API key works:', res.data))
.catch(err => console.error('API key invalid or error:', err.response?.data || err.message));

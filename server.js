// backend/server.js
const express = require('express');
const connectDB = require('./config/db'); // Import MongoDB connection function
const app = express();

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api', require('./routes/api'));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

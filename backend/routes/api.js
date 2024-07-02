// backend/routes/api.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('API is running');
});

module.exports = router;

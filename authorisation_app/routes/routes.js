const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

// Public route
router.get('/public', (req, res) => {
    res.send('This is a public route');
});

// Private route (Protected)
router.get('/private', authMiddleware, (req, res) => {
    res.send('Welcome to private route');
});

module.exports = router;

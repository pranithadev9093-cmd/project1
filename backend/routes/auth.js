const express = require('express');
const router = express.Router();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// Mock User DB or integrate with PG later
// const users = []; 

router.post('/register', async (req, res) => {
    // TODO: Implement registration
    const { email, password, name } = req.body;
    res.json({ message: 'Registration not implemented yet', received: { email, name } });
});

router.post('/login', async (req, res) => {
    // TODO: Implement login
    const { email, password } = req.body;
    res.json({ message: 'Login not implemented yet', token: 'mock-jwt-token' });
});

module.exports = router;

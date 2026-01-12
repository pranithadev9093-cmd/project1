const express = require('express');
const router = express.Router();
const axios = require('axios'); // Need to install axios if not present, or use fetch
// Using native fetch in Node 18+ or install axios. Let's use fetch if available or simple http.
// To be safe, let's assume fetch is available (Node 18+) or I should verify node version.
// Or I can add axios to package.json. For now, let's use global fetch.

const AI_SERVICE_URL = process.env.AI_SERVICE_URL || 'http://localhost:8000';

router.get('/churn-predictions', async (req, res) => {
    try {
        const response = await fetch(`${AI_SERVICE_URL}/api/v1/churn-predictions`);
        if (!response.ok) {
            throw new Error(`AI Service returned ${response.status}`);
        }
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error("AI Service Error:", err);
        res.status(500).json({ error: 'Failed to fetch churn predictions' });
    }
});

router.get('/sales-forecast', async (req, res) => {
    try {
        const response = await fetch(`${AI_SERVICE_URL}/api/v1/sales-forecast`);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error("AI Service Error:", err);
        res.status(500).json({ error: 'Failed to fetch sales forecast' });
    }
});

module.exports = router;

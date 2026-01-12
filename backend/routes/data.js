const express = require('express');
const router = express.Router();
const { loadCsvData } = require('../services/dataLoader');

router.get('/customers', async (req, res) => {
    try {
        const data = await loadCsvData('customers.csv');
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to load customers' });
    }
});

router.get('/products', async (req, res) => {
    try {
        const data = await loadCsvData('products.csv');
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to load products' });
    }
});

router.get('/sales', async (req, res) => {
    try {
        const data = await loadCsvData('sales.csv');
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to load sales' });
    }
});

router.get('/dashboard/summary', async (req, res) => {
    // Simple aggregation for dashboard
    try {
        const sales = await loadCsvData('sales.csv');
        const totalRevenue = sales.reduce((acc, row) => acc + (parseFloat(row.price) * parseInt(row.quantity)), 0);
        const totalOrders = new Set(sales.map(r => r.order_id)).size;

        res.json({
            revenue: totalRevenue.toFixed(2),
            orders: totalOrders,
            active_customers: new Set(sales.map(r => r.customer_id)).size
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to verify summary' });
    }
});

module.exports = router;

const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 81;

// Middleware untuk mengizinkan CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/dashboard/:dashboardId', async (req, res) => {
    const { dashboardId } = req.params;
    try {
        // Ganti URL dengan URL public dashboard Anda
        const response = await axios.get(`https://geolabx.grafana.net/public-dashboards/ae8a3dde273547f99f0353d55f7fd657`);
        res.send(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});
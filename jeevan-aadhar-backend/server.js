const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.static(path.join(__dirname, '../public'))); // Serve static files

// Routes

// Home route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Demo endpoints (no database functionality)
app.post('/api/donor', (req, res) => {
    // Demo response - no actual data saving
    res.status(201).json({ message: 'Demo: Donor data would be saved here' });
});

app.post('/api/institute', (req, res) => {
    // Demo response - no actual data saving
    res.status(201).json({ message: 'Demo: Institute data would be saved here' });
});

app.post('/api/supplier', (req, res) => {
    // Demo response - no actual data saving
    res.status(201).json({ message: 'Demo: Supplier data would be saved here' });
});

app.post('/api/transaction', (req, res) => {
    // Demo response - no actual data saving
    res.status(201).json({ message: 'Demo: Transaction data would be saved here' });
});

app.get('/api/users', (req, res) => {
    // Demo response - no actual data retrieval
    res.status(200).json([]);
});

app.get('/api/user/:id', (req, res) => {
    // Demo response - no actual data retrieval
    res.status(404).json({ error: 'Demo: User data would be retrieved here' });
});

app.patch('/api/user/:id', (req, res) => {
    // Demo response - no actual data updating
    res.status(200).json({ message: 'Demo: User data would be updated here' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Demo server is running on http://localhost:${PORT}`);
    console.log('Note: This is a demo version with no database functionality');
});
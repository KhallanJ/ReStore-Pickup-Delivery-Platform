const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON data from requests
app.use(express.json());

// GET route (sends data to the client)
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ]);
});

// POST route (receives data from the client)
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({ message: 'User created', user: newUser });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
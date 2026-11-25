const express = require('express');
const userRouter = require('./routes/users');
const pool = require('./config/db')
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON data from requests
app.use(express.json());

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Users router
app.use('/users', userRouter);
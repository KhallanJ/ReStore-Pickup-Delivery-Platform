const express = require("express");
const router = express.Router();

// GET users
router.get('/', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('insert query here');
        res.json(rows); // Send the users back
    } catch (err) {
        console.error(err);
        req.status(500).json({ error: 'Database query failed' });
    } finally {
        if (conn) conn.release();
    }
});

// POST users
router.post('/', async (req, res) => {
    // Validate user input
    const { name, username, password, email, role } = req.body;
    let conn;

    try {
        // connect db
        conn = await pool.getConnection();
        const result = await conn.query(
            'INSERT INTO **Db name** (name, username, password, email, role) values (?, ?, ?, ?)',
            [name, username, password, email, role]
        );
        res.status(201).json({ id: Number(result.insertId), name, email });

    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create user' });
    } finally {
        if (conn) conn.release();
    }


    // Add to DB

    // Send response
    res.status(201).json({ message: 'User created', user: newUser });
})

// User by id requests
router.route('/:id').get((req, res) => {

}).put((req, res) => {

}).delete((req, res) => {

});


// Define what to do with id (middleware)
router.param('id', (req, res, next, id) => {

})

module.exports = router;
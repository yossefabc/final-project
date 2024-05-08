const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const router = express.Router();
const knex = require('knex');

// Connection between database and Node.js application
const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5433,
        user: 'postgres',
        database: 'dvdrental',
        password: 'yossef123',
    }
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // Enable CORS

app.get('/home', (req, res) => {
    res.send("okkkkk")
});

// Route to register a new user
app.post('/exercise', async (req, res) => {
    console.log("Received request body:", req.body);
    const { first_name, last_name, email, username, password } = req.body;
    try {
        // Hash the password before storing it
        const saltRounds = 10;
        console.log("Salt rounds:", saltRounds);
        const hashedPassword = await bcrypt.hash(password, saltRounds );

        // Insert user data into the database
        await db("users").insert({
            first_name: first_name,
            last_name: last_name,
            email: email,
            username: username,
            password: hashedPassword
        });

        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});




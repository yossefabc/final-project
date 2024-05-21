
// const express = require('express');
// const bcrypt = require('bcrypt');
// const cors = require('cors');
// const { db } = require('./config/db.js');
// const app = express();

// // Middleware, modify and perform tasks based on the request data.
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors()); // Enable CORS

// app.get('/home', (req, res) => {
//     res.send("okkkkk");
// });

// app.post('/exercise', async (req, res) => {
//     console.log("Received request body:", req.body);
//     const { first_name, last_name, email, username, password } = req.body;
//     try {
//         const saltRounds = 10;
//         console.log("Salt rounds:", saltRounds);
//         const hashedPassword = await bcrypt.hash(password, saltRounds);

//         await db("users").insert({
//             first_name: first_name,
//             last_name: last_name,
//             email: email,
//             username: username,
//             password: hashedPassword
//         });

//         res.status(201).send('User registered successfully');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal server error');
//     }
// });

// app.post('/api/exercise-recommendations', async (req, res) => {
//     const { weight, height, age } = req.body;
//     console.log('Received data:', { weight, height, age });
//     try {
//         const nutrition = {
//             calories: weight * 30,
//             protein: weight * 1.2,
//             carbs: weight * 2,
//             fat: weight * 0.5
//         };

//         res.status(201).json({ nutrition });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal server error');
//     }
// });


// app.post('/api/progress', async (req, res) => {
//     const { userId, date, weight, dietAdherence, notes } = req.body;
  
//     // Check if required fields are present
//     if (!userId || !date || !weight || !dietAdherence) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }
  
//     try {
//       // Insert progress data into the database
//       await db('progress').insert({
//         user_id: userId, // Use userId provided in the request body
//         date,
//         weight,
//         diet_adherence: dietAdherence,
//         notes
//       });
  
//       res.status(201).json({ message: 'Progress saved successfully' });
//     } catch (error) {
//       console.error('Error saving progress:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  


//   app.listen(process.env.PORT || 3000, () => {
//     console.log("Server is running on port 3000");
// });






const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const { db } = require('./config/db.js');
const app = express();

// Middleware, modify and perform tasks based on the request data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // Enable CORS

app.get('/home', (req, res) => {
    res.send("okkkkk");
});

app.post('/exercise', async (req, res) => {
    console.log("Received request body:", req.body);
    const { first_name, last_name, email, username, password } = req.body;
    try {
        const saltRounds = 10;
        console.log("Salt rounds:", saltRounds);
        const hashedPassword = await bcrypt.hash(password, saltRounds);

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

app.post('/api/exercise-recommendations', async (req, res) => {
    const { weight, height, age } = req.body;
    console.log('Received data:', { weight, height, age });
    try {
        const nutrition = {
            calories: weight * 30,
            protein: weight * 1.2,
            carbs: weight * 2,
            fat: weight * 0.5
        };

        res.status(201).json({ nutrition });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

app.post('/api/progress', async (req, res) => {
  const { date, weight, dietAdherence, notes } = req.body;

  console.log('Received progress data:', req.body);

  // Check if required fields are present
  if (!date || !weight || !dietAdherence) {
    console.error('Missing required fields');
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Insert progress data into the database
    await db('progress').insert({
      date,
      weight,
      diet_adherence: dietAdherence,
      notes
    });

    res.status(201).json({ message: 'Progress saved successfully' });
  } catch (error) {
    console.error('Error saving progress:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
});

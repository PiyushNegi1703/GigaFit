// Importing .env
require('dotenv').config();

// Importing Express
const express = require('express');
// Importing workout routes
const workoutRoutes = require('./routes/workout');
// Importing mongoose
const mongoose = require('mongoose');


// Express App
const app = express();

// Creating a default port
const port = process.env.PORT || 900;

// Middleware
app.use(express.json());

app.use((req, resp, next) => {
    console.log(req.path, req.method);
    next();
})

// Routes
app.use('/api/workouts', workoutRoutes);

// Setting strictQuery to false to prevent error
mongoose.set('strictQuery', false);

// Listening for requests
mongoose.connect(process.env.URI)
    .then(() => {
        app.listen(port, () => {
            console.log('Deployed successfully on', port);
        })
    })
    .catch((error) => {
        console.log(error);
    })
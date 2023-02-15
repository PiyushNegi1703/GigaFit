// Importing .env
require('dotenv').config()
// Importing Express
const express = require('express')
// Importing workout routes
const workoutRoutes = require('./routes/workout')


// Express App
const app = express()

// Middleware
app.use(express.json())
app.use((req, resp, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts', workoutRoutes)

// Listening for requests
app.listen(process.env.PORT, () => {
    console.log('App Started on Port 5000', process.env.PORT)
})
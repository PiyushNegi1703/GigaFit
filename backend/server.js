// Importing .env
require('dotenv').config()

// Importing Express
const express = require('express')
// Importing workout routes
const workoutRoutes = require('./routes/workout')
// Importing mongoose
const mongoose = require('mongoose')


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

// Setting strictQuery to false to prevent error
mongoose.set('strictQuery', false)

// Listening for requests
mongoose.connect(process.env.URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Deployed successfully on', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
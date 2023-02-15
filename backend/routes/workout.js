// Importing Express
const express = require('express')

// Creating a Router
const router = express.Router()

// Creating Routes
    // Getting all workouts
router.get('/', (req, resp) => {
    resp.json({mssg: 'Get All Workouts'})
})

module.exports = router
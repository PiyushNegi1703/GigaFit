// Importing Express
const express = require('express')

// Importing Workouts
const { getFullBody, newFullBody } = require('../controllers/fullBodyWorkoutController')

// Creating a Router
const router = express.Router()

// Get Route for Full body workout
router.get('/', getFullBody)

// Post Route for Full body workout
router.post('/', newFullBody)

module.exports = router
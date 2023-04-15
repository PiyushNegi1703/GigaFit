const express = require('express')
const {
    newWorkout,
    getWorkouts,
    delWorkout,
    updWorkout
} = require('../controllers/userWorkoutController')

const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

// Requiring authentication
router.use(requireAuth)

// GETs all workouts
router.get('/', getWorkouts)

// POST a new workout
router.post('/', newWorkout)

// DELETE a workout
router.delete('/:id', delWorkout)

// UPDATE a workout
router.patch('/:id', updWorkout)

module.exports = router
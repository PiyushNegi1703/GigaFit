// Importing Express
const express = require('express');

// Creating a Router
const router = express.Router();

// Creating Routes
    // Getting all workouts
router.get('/', (req, resp) => {
    resp.json({mssg: 'Get All Workouts'});
})

    // Get one workout
router.get('/:id', (req, resp) => {
    resp.json({mssg: 'Getting one Workout'});
})

    // Post a new workout
router.post('/', (req, resp) => {
    resp.json({mssg: 'Adding a new Workout'});
})

    // Delete a workout
router.delete('/:id', (req, resp) => {
    resp.json({mssg: 'Deleting a Workout'});
})

    // Update a workout
router.patch('/:id', (req, resp) => {
    resp.json({mssg: 'Updating a Workout'});
})


module.exports = router;
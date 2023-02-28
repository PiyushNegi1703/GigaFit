// Importing Express
const express = require("express");
// Importing controllers
const {
  newWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");

// Creating a Router
const router = express.Router();

// Creating Routes
// Getting all workouts
router.get("/", getWorkouts);

// Get one workout
router.get("/:id", getWorkout);

// Post a new workout
router.post("/", newWorkout);

// Delete a workout
router.delete("/:id", (req, resp) => {
  resp.json({ mssg: "Deleting a Workout" });
});

// Update a workout
router.patch("/:id", (req, resp) => {
  resp.json({ mssg: "Updating a Workout" });
});

module.exports = router;

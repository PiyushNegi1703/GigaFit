const Workouts = require("../models/workoutModel");
const mongoose = require("mongoose");

// Getting All Workouts
const getWorkouts = async (req, resp) => {
  const id = req._id;

  const workout = await Workouts.find({ id });

  resp.status(200).json(workout);
};

// Getting a single category of workouts
const getWorkout = async (req, resp) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return resp.status(400).json({ error: "No such workout found" });
  }

  const workout = await Workouts.findById(id);

  if (!workout) {
    return resp.status(404).json({ error: "No such workout found" });
  }

  resp.status(200).json(workout);
};

// Posting a new workout
const newWorkout = async (req, resp) => {
  const { workout1, workout2, workout3 } = req.body;

  let emptyFields = [];

  if (!workout1 || !workout2 || !workout3) {
    emptyFields.push("error");
  }

  if (emptyFields.length > 0) {
    return resp.status(400).json({ error: "Please fill in all the fields" });
  }

  try {
    const workout = await Workouts.create({
      workout1,
      workout2,
      workout3,
    });
    resp.status(200).json(workout);
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
};

module.exports = { newWorkout, getWorkouts, getWorkout };

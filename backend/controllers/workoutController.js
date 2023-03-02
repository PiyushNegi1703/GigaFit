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
  const { title, workout1, workout2, workout3, workout4, workout5 } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!workout1) {
    emptyFields.push("workout1");
  }
  if (!workout2) {
    emptyFields.push("workout2");
  }
  if (!workout3) {
    emptyFields.push("workout3");
  }
  if (!workout4) {
    emptyFields.push("workout4");
  }
  if (!workout5) {
    emptyFields.push("workout5");
  }

  if (emptyFields.length > 0) {
    return resp.status(400).json({ error: "Please fill in all the fields" });
  }

  try {
    const workout = await Workouts.create({
      title,
      workout1,
      workout2,
      workout3,
      workout4,
      workout5,
    });
    resp.status(200).json(workout);
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
};

module.exports = { newWorkout, getWorkouts, getWorkout };

const UserWorkouts = require("../models/userWorkoutsModel");
const mongoose = require("mongoose");

// Getting All Workouts From a User
const getWorkouts = async (req, resp) => {
  const user_id = req.user._id;

  const workout = await UserWorkouts.find({ user_id }).sort({ createdAt: -1 });

  resp.status(200).json(workout);
};

// Posting Workouts
const newWorkout = async (req, resp) => {
  const { title, reps } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!reps) {
    emptyFields.push("reps");
  }

  if (emptyFields.length > 0) {
    return resp
      .status(404)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const user_id = req.user._id;
    const workout = await UserWorkouts.create({ title, reps, user_id });
    resp.status(200).json(workout);
  } catch (error) {
    resp.status(404).json({ error: error.message });
  }
};

// Updating a workout
const updWorkout = async (req, resp) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return resp.status(404).json({error: "Workout not found"})
  }

  const workout = await UserWorkouts.findByIdAndUpdate({_id: id}, {...req.body})

  if(!workout) {
    return resp.status(404).json({error: "Workout no found"})
  }

  return resp.status(200).json(workout);
}

// DELETE a workout
const delWorkout = async (req, resp) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    resp.status(404).json({ error: "No such Workout" });
  }

  const workout = await UserWorkouts.findOneAndDelete({_id: id});

  if (!workout) {
    return resp.status(404).json({ error: "No such Workout" });
  }

  resp.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  newWorkout,
  delWorkout,
  updWorkout
};

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating a schema for workout
const workoutSchema = new Schema({
  workout1: {
    data: {
      type: Array,
    },
  },
  workout2: {
    data: {
      type: Array,
    },
  },
  workout3: {
    data: {
      type: Array,
    },
  }
});

module.exports = mongoose.model("Workout", workoutSchema);

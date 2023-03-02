const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating a schema for workout
const workoutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  workout1: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  workout2: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  workout3: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  workout4: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  workout5: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  _id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Workout", workoutSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating a schema for full body workout
const fullBodySchema = new Schema({
  week1: {
    day1: {
        type: Array
    },
    day2: {
        type: Array
    },
    day3: {
        type: Array
    },
    day4: {
        type: Array
    },
  },
  week2: {
    day1: {
        type: Array
    },
    day2: {
        type: Array
    },
    day3: {
        type: Array
    },
    day4: {
        type: Array
    },
  },
  week3: {
    day1: {
        type: Array
    },
    day2: {
        type: Array
    },
    day3: {
        type: Array
    },
    day4: {
        type: Array
    },
  },
  week4: {
    day1: {
        type: Array
    },
    day2: {
        type: Array
    },
    day3: {
        type: Array
    },
    day4: {
        type: Array
    },
  },
  week5: {
    day1: {
        type: Array
    },
    day2: {
        type: Array
    },
    day3: {
        type: Array
    },
    day4: {
        type: Array
    },
  },
  week6: {
    day1: {
        type: Array
    },
    day2: {
        type: Array
    },
    day3: {
        type: Array
    },
    day4: {
        type: Array
    },
  },
});

module.exports = mongoose.model("fullBody", fullBodySchema);

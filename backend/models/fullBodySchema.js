const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating a schema for full body workout
const fullBodySchema = new Schema({
  week1: {
    day1: {
      data: {
        type: Array,
      },
    },
    day2: {
      data: {
        type: Array,
      },
    },
    day3: {
      data: {
        type: Array,
      },
    },
    day4: {
      data: {
        type: Array,
      },
    },
  },
  week2: {
    day1: {
      data: {
        type: Array,
      },
    },
    day2: {
      data: {
        type: Array,
      },
    },
    day3: {
      data: {
        type: Array,
      },
    },
    day4: {
      data: {
        type: Array,
      },
    },
  },
  week3: {
    day1: {
      data: {
        type: Array,
      },
    },
    day2: {
      data: {
        type: Array,
      },
    },
    day3: {
      data: {
        type: Array,
      },
    },
    day4: {
      data: {
        type: Array,
      },
    },
  },
  week4: {
    day1: {
      data: {
        type: Array,
      },
    },
    day2: {
      data: {
        type: Array,
      },
    },
    day3: {
      data: {
        type: Array,
      },
    },
    day4: {
      data: {
        type: Array,
      },
    },
  },
  week5: {
    day1: {
      data: {
        type: Array,
      },
    },
    day2: {
      data: {
        type: Array,
      },
    },
    day3: {
      data: {
        type: Array,
      },
    },
    day4: {
      data: {
        type: Array,
      },
    },
  },
  week6: {
    day1: {
      data: {
        type: Array,
      },
    },
    day2: {
      data: {
        type: Array,
      },
    },
    day3: {
      data: {
        type: Array,
      },
    },
    day4: {
      data: {
        type: Array,
      },
    },
  },
});

module.exports = mongoose.model("fullBody", fullBodySchema);

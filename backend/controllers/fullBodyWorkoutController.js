const FullBodyWorkout = require("../models/fullBodySchema");

const getFullBody = async (req, resp) => {
  const id = req._id;

  const workout = await FullBodyWorkout.find({ id });

  resp.status(200).json(workout);
};

const newFullBody = async (req, resp) => {
  const { week1, week2, week3, week4, week5, week6 } = req.body;

  let emptyFields = [];

  if (!week1 || !week2 || !week3 || !week4 || !week5 || !week6) {
    emptyFields.push("error");
  }

  if (emptyFields.length > 0) {
    return resp.status(400).json({ error: "Please fill in all the fields" });
  }

  try {
    const workout = await FullBodyWorkout.create({
      week1,
      week2,
      week3,
      week4,
      week5,
      week6,
    });

    resp.status(200).json(workout);
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
};

module.exports = { getFullBody, newFullBody }
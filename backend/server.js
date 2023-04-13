// Importing .env
require("dotenv").config();

// Importing Express
const express = require("express");
// Importing cors
const cors = require("cors");

// Importing routes
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");
const fullBody = require('./routes/fullBodyWorkout')

// Importing mongoose
const mongoose = require("mongoose");

// Express App
const app = express();

// Creating a default port
const port = process.env.PORT || 900;

// Using Cors
app.use(cors({
  origin: ["http://localhost:3000", "https://gigafit.pages.dev"]
}));

// app.use(cors())

// Using express
app.use(express.json());

app.use((req, resp, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
app.use("/api/fullBody", fullBody);

// Setting strictQuery to false to prevent error
mongoose.set("strictQuery", false);

// Listening for requests
mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(port, () => {
      console.log("Deployed successfully on", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });

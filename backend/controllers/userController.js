// Importing User Model
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Creating a JW Token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// Logging in a User
const loginUser = async (req, resp) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // Create a token
    const token = createToken(user._id);

    resp.status(200).json({ email, token });
  } catch (error) {
    resp.status(404).json({ error: error.message });
  }
};

// Signing up a User
const signupUser = async (req, resp) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);

    // Create a token
    const token = createToken(user._id);

    resp.status(200).json({ username, email, token });
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
};

// Exporting signing and loggin functions
module.exports = { signupUser, loginUser };

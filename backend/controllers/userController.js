// Importing User Model
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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
// Verifying the token recieved from frontend

async function verifyToken(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const user = { email: payload.email, name: payload.name };
  return user;
}

// Google Auth

const googleAuth = async (req, res) => {
  const { token } = req.body;
  console.log(token);
  if (!token) {
    res.status(402).json({ error: "token not found" });
  }
  const user = await verifyToken(token);

  const userexist = await User.findOne({ email: user.email });

  // Checking if user exists

  if (userexist) {
    const { _id, username, email } = userexist;
    const token = createToken(userexist._id);
    res.json({ username, email, token });
  } else {
    const newuser = await new User({
      email: user.email,
      password: "",
      username: user.name,
      isGoogleUser: true,
    });
    await newuser.save();

    const googleuser = await User.findOne({ email: user.email });

    const { _id, username, email } = googleuser;
    const token = createToken(googleuser._id);
    res.json({ username, email, token });
  }
};

// Exporting signing and loggin functions
module.exports = { signupUser, loginUser, googleAuth };

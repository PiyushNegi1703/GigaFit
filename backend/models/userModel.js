// Importing Mongoose
const mongoose = require("mongoose");
// Importing Bcrypt
const bcrypt = require("bcrypt");
// Importing Validator
const validator = require("validator");

// Creating a Schema
const Schema = mongoose.Schema;

// Creating User
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    
  },
  isGoogleUser:{
    type:Boolean,
    default:false
}
});

// Setting Signup function
userSchema.statics.signup = async function (username, email, password) {
  // Validation
  if (!username || !email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid Email address");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Please create a strong password");
  }

  // Checking Uniqueness
  const usernameExists = await this.findOne({ username });
  const emailExists = await this.findOne({ email });

  if (usernameExists) {
    throw Error("This Username is already taken");
  }

  if (emailExists) {
    throw Error("This Email is already registered");
  }

  // Salting & Hashing Password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash });

  return user;
};

// Setting Login function
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All  fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error(
      "Email not registered or invalid. Please enter a valid Email address"
    );
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("The password entered is incorrect");
  }

  return user;
};

// Exporting the User Schema
module.exports = mongoose.model("User", userSchema);

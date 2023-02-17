// Importing User Model
const User = require('../models/userModel');

// Logging in a User
const loginUser = async (req, resp) => {
    resp.json({mssg: 'User logged in'});
}

// Signing up a User
const signupUser = async (req, resp) => {
    const {username, email, password} = req.body;

    try {
        const user = await User.signup(username, email, password);
        resp.status(200).json({email, user});
    } catch(error) {
        resp.status(400).json({error: error.message});
    }
}

// Exporting signing and loggin functions
module.exports = { signupUser, loginUser };
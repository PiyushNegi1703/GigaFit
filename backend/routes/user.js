const express = require('express');

// Importing login and signup controllers from userController
const { loginUser, signupUser } = require('../controllers/userController');

const router = express.Router();

// Routes for Login and Signup
    // Login route
router.post('/login', loginUser);

    // Signup route
router.post('/signup', signupUser);

module.exports = router;
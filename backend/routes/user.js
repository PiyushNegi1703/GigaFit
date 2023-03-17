const express = require('express');

// Importing login and signup controllers from userController
const { loginUser, signupUser,googleAuth } = require('../controllers/userController');

const router = express.Router();

// Routes for Login and Signup
    // Login route
router.post('/login', loginUser);

    // Signup route
router.post('/signup', signupUser);

    // Googleauth route
router.post('/googleauth',googleAuth)

module.exports = router;
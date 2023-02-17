// Importing Mongoose
const mongoose = require('mongoose');
// Importing Bcrypt
const bcrypt = require('bcrypt');

// Creating a Schema
const Schema = mongoose.Schema;

// Creating User
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Setting sign up function
userSchema.statics.signup = async function(username, email, password) {

    const usernameExists = await this.findOne({ username });
    const emailExists = await this.findOne({ email });

    if(usernameExists) {
        throw Error('This Username is already taken');
    }

    if(emailExists) {
        throw Error('This email is already registered');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ username, email, password: hash });

    return user;
};

// Exporting the User Schema
module.exports = mongoose.model('User', userSchema);
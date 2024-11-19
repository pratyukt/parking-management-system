const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please Enter Your First Name"],
    },
    lastName: {
        type: String,
        required: [true, "Please Enter Your Last Name"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true, // Ensure email uniqueness
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"], 
    },
    age: {
        type: Number,
        required: [true, "Please Enter Your Age"],
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please Enter Your Phone Number"],
    },
    role: {
        type: String,
        required: [true, "Please Enter Your role"],
    }
});

module.exports = mongoose.model("User", userSchema);

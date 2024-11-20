const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/SignUpControllers");
router.post("/signup", registerUser);

router.post("/signup",registerUser ,(req, res) => {
    console.log("Incoming Data:", req.body); // Log incoming form data
    res.status(201).json({ message: "Signup data received successfully" });
});

router.post("/login", loginUser , (req, res) => {
    console.log("Login Attempt Data:", req.body); // Log incoming login data
    res.status(200).json({ message: "Login successful", user: req.user });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Register Route
router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Check if user already exists
        const userExists = await User.authenticateUser(email);
        if (userExists) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Create the new user
        await User.createUser(username, email, password);
        console.log("User registered successfully");
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Database error (user creation):", error);
        res.status(500).json({ message: "Database error" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const user = await User.authenticateUser(email, password);
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT Token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Database error (user authentication):", error);
        res.status(500).json({ message: "Database error" });
    }
});

module.exports = router;

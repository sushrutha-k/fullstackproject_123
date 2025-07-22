// routes/contact.js
const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.post("/", (req, res) => {
    const { phone, email, comment } = req.body;

    // Simple Validation
    if (!phone || !email || !comment) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Insert into database (optional, or you can just log the message)
    const query = "INSERT INTO contacts (phone, email, comment) VALUES (?, ?, ?)";
    db.query(query, [phone, email, comment], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }
        res.status(200).json({ message: "Message sent successfully!" });
    });
});

module.exports = router;

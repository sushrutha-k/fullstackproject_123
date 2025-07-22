// routes/fertilizers.js
const express = require("express");
const router = express.Router();
const Fertilizer = require("../models/Fertilizer");

// Get all fertilizers
router.get("/", async (req, res) => {
    try {
        const fertilizers = await Fertilizer.find();
        res.json(fertilizers);
    } catch (error) {
        console.error("Error fetching fertilizers:", error);
        res.status(500).send("Server Error");
    }
});


module.exports = router;

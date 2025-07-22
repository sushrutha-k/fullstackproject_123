// routes/farming.js
const express = require("express");
const router = express.Router();
const Farming = require("../models/Farming");

// Get all farming tools
router.get("/", async (req, res) => {
    try {
        const farmingTools = await Farming.find();
        res.json(farmingTools);
    } catch (error) {
        console.error("Error fetching farming tools:", error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;

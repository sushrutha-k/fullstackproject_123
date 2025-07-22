// routes/irrigation.js
const express = require("express");
const router = express.Router();
const Irrigation = require("../models/Irrigation");

// Get all irrigation tools
router.get("/", async (req, res) => {
    try {
        const irrigationTools = await Irrigation.find();
        res.json(irrigationTools);
    } catch (error) {
        console.error("Error fetching irrigation tools:", error);
        res.status(500).send("Server Error");
    }
});


module.exports = router;

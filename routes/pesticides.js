// routes/pesticides.js
const express = require("express");
const router = express.Router();
const Pesticide = require("../models/Pesticide");

// Get all pesticides
router.get("/", async (req, res) => {
    try {
        const pesticides = await Pesticide.find();
        res.json(pesticides);
    } catch (error) {
        console.error("Error fetching pesticides:", error);
        res.status(500).send("Server Error");
    }
});


module.exports = router;

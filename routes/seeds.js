const express = require("express");
const router = express.Router();
const Seed = require("../models/Seed");

// Get all seeds
router.get("/", async (req, res) => {
    try {
        const seeds = await Seed.find();
        res.json(seeds);
    } catch (error) {
        console.error("Error fetching seeds:", error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;

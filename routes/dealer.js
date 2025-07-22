// routes/dealer.js
const express = require("express");
const router = express.Router();
const Dealer = require("../models/Dealer");

// Register a new dealer
router.post("/register", async (req, res) => {
    try {
        const dealerData = req.body;

        // Check if dealer already exists by email or phone
        const existingDealer = await Dealer.findOne({
            $or: [{ email: dealerData.email }, { phone: dealerData.phone }, { license: dealerData.license }]
        });

        if (existingDealer) {
            return res.status(400).json({ message: "Dealer with this email, phone, or license already exists." });
        }

        const dealer = new Dealer(dealerData);
        await dealer.save();
        res.status(201).json({ message: "Dealer registered successfully!" });
    } catch (error) {
        console.error("Error registering dealer:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});
// Check if dealer exists
router.get("/check", async (req, res) => {
    try {
        const { email, license } = req.query;
        const existingDealer = await Dealer.findOne({
            $or: [{ email }, { license }]
        });

        if (existingDealer) {
            return res.status(200).json({ exists: true });
        }

        res.status(200).json({ exists: false });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});


module.exports = router;

// routes/products.js
const express = require("express");
const router = express.Router();
const Seed = require("../models/Seed");
const Fertilizer = require("../models/Fertilizer");
const Pesticide = require("../models/Pesticide");
const IrrigationTool = require("../models/Irrigation");
const FarmingTool = require("../models/Farming");

const models = {
    Seeds: Seed,
    Fertilizers: Fertilizer,
    Pesticides: Pesticide,
    "Irrigation Tools": IrrigationTool,
    "Farming Tools": FarmingTool
};

router.post("/add", async (req, res) => {
    try {
        const { name, category, price, sizes, dealers, dealerPrices, image } = req.body;

        if (!models[category]) return res.status(400).json({ message: "Invalid category" });

        const product = new models[category]({
            name,
            price,
            sizes,
            dealers,
            dealerPrices: {
                dealer1: dealerPrices[0] || null,
                dealer2: dealerPrices[1] || null,
                dealer3: dealerPrices[2] || null
            },
            image
        });

        await product.save();
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding product" });
    }
});

module.exports = router;

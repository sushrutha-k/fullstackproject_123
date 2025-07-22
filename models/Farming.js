// models/Farming.js
const mongoose = require("mongoose");

const farmingSchema = new mongoose.Schema({
    name: String,
    image: String,
    sizes: [String],
    dealerPrices: {
        dealer1: String,
        dealer2: String,
        dealer3: String
    }
});

module.exports = mongoose.model("Farming", farmingSchema);

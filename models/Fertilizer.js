// models/Fertilizer.js
const mongoose = require("mongoose");

const fertilizerSchema = new mongoose.Schema({
    name: String,
    price: Number,
    sizes: [String],
    dealers: [String],
    dealerPrices: {
        dealer1: String,
        dealer2: String,
        dealer3: String
    },
    image: String
});

module.exports = mongoose.model("Fertilizer", fertilizerSchema);

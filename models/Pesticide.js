// models/Pesticide.js
const mongoose = require("mongoose");

const pesticideSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Pesticide", pesticideSchema);

// models/Seed.js
const mongoose = require('mongoose');

const seedSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Seed', seedSchema);

// models/Dealer.js
const mongoose = require("mongoose");

const dealerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    business: { type: String, required: true },
    license: { type: String, required: true, unique: true },
    gstin: { type: String },
    registeredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Dealer", dealerSchema);

// server.js
require("./mongo.js");
require("dotenv").config();  
const express = require("express");
const mongoose = require("mongoose");
const Seed = require("./models/Seed");
const cors = require("cors");
const axios = require("axios");

const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Default route (this will serve your seeds.html file)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/seeds", require("./routes/seeds"));
app.use("/api/fertilizers", require("./routes/fertilizers"));
app.use("/api/pesticides", require("./routes/pesticides"));
app.use("/api/irrigation", require("./routes/irrigation"));
app.use("/api/farming", require("./routes/farming"));
app.use("/api/dealer", require("./routes/dealer"));
app.use("/api/products", require("./routes/products"));
app.use("/api/payment", require("./routes/payment"));

// Default 404 Route
app.use((req, res) => {
    res.status(404).send("Route not found");
});

// Start Server
app.listen(port, () => console.log(`Server running on port ${port}`));

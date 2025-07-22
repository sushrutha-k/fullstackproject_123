const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fairdeal");

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB (fairdeal database)");
});

mongoose.connection.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err);
});

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        phone: String,
        city: String,
        country: String
    }
);

module.exports = mongoose.model("User", userSchema);
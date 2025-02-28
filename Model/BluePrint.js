const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("StudentData", ProductSchema);

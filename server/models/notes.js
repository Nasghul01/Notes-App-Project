const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    message : String
})

const Notes = mongoose.model("enqueries", notesSchema);

module.exports = Notes; 
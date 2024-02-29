const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    id: String, 
    body: String
})

const Notes = mongoose.model("enqueries", notesSchema);

module.exports = Notes; 
const express = require("express");
const mongoose = require("mongoose");
const Notes = require("./src/models/notes")
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://Nasghul01:4OfCl8j3awpGUEVl@cluster1.h9sarn6.mongodb.net/Notesdb")


app.listen(3001, () => {
    console.log("Server is Running")
})
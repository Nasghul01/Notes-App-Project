const express = require("express");
const mongoose = require("mongoose");
const Notes = require("./src/models/notes")
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://Nasghul01:4OfCl8j3awpGUEVl@cluster1.h9sarn6.mongodb.net/Notesdb")


app.get("/", async (req, res) => {
    try {
        const notes = await Notes.find({});
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.post("/", async (req,res) => {
    try {
        const notes = await Notes.create(req.body)
        res.status(200).json(notes)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.listen(3001, () => {
    console.log("Server is Running")
})
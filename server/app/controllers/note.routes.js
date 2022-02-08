const express = require("express");
const noteRouter = express.Router();
const db = require("../models/index");
const Note = db.note;

noteRouter.post("/addNotes", (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    note: req.body.note
  });
  newNote.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully added new note");
    }
  });
  res.status(200).send(newNote);
});

noteRouter.get("/", (req, res) => {
  Note.find({}, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      if (result.length > 0) {
        console.log(result);
        res.status(200).send(result);
      } else {
        console.log("no notes yet");
        res.status(200).send([]);
      }
    }
  });
});

module.exports = noteRouter;
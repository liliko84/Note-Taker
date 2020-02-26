const router = require('express').Router()
const fs = require('fs')
const path = require('path')
let notes = require("../DB/notes.json");

router.get('/notes', function (req, res) {
  res.json(notes)
})

router.delete('/notes/:id', function (req, res) {
  notes = notes.filter(note => note.id !== parseInt(req.params.id))

  fs.writeFile(path.join(__dirname, "../DB/notes.json"), JSON.stringify(notes),
    err => {
      if (err) {
        return res.status(500).json(err);
      }
      res.status(200).json({
        message: "Deleted Recipe!"
      })
    })
})

// ['dog', 'cat']  length: 2
// arr[0] === 'dog'
// arr[1] === 'cat'
// arr[2] === 'iguana'
// ['dog', 'cat', 'iguana']

// Problems with .length
// # Only works when initial ID is zero AND no elements removed

// Benefits of .length
// # If previous rules follewed, all new id's will be one greater than last element of the arrays id

// Develop algorithm that takes advantage of benefits of .length, without negatives
// # Get last element of array, make new id one bigger than that id

// ['dog', 'cat'] length: 2
// arr[1] === 'cat'
// arr[arr.length - 1] === 'cat'
// ['dog', 'cat', 'iguana'] length: 3
// arr[2] === 'iguana'
// arr[arr.length - 1] === 'iguana'


router.post("/notes", function (req, res) {
  const newNote = {
    ...req.body,
    id: notes[notes.length - 1].id + 1
  };

  notes.push(newNote);

  fs.writeFile(path.join(__dirname, "../DB/notes.json"), JSON.stringify(notes),
    err => {
      if (err) {
        return res.status(500).json(err);
      }
      res.status(200).json({
        message: "New Recipe!"
      })
    })
})

module.exports = router
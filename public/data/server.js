
const express = require('express');
const { notes } = require('./data/notes');

const app = express();
const PORT = 3000;
app.get("/api/notes",(req,res) =>{
  res.json(notes);
});

app.get
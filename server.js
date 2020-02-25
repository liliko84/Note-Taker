const express = require('express');
const fs = require("fs");
const path = require("path");
const {notes} = require("./DB/notes.json");
const PORT = process.env.PORT || 8080;
const app = express();
//all routes
const apiRoutes = require ("./routes/apiRoutes");
const htmlRoutes = require ("./routes/htmlRoutes");


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(apiRoutes);
app.use(htmlRoutes);

//get notes by id
const findById = (noteId, notesArr)=>{
  return notesArr.find(({ id }) => id === noteId);
};
//api-current notes
app.get("/api/notes",(req,res)=>{
  res.json(notes)
});

//post a new note
app.post("/api/notes",(req,res)=>{
  const newNote = {...req.body};
  newNote.id = notes.length;

  notes.push(newNote);
  
  fs.writeFile(path.join(__dirname,"./DB/notes.json"),JSON.stringify("{notes: notes}",null,2),
  err =>{
    if (err){
      return res.status(500).json(err);
      }
     res.status(200).json({
       message:"New Recipe!"
     })
    }
    )
});

app.get("/api/notes/:id",(req,res)=>{
  const noteId = req.params.id;
const noteObj = notes.find(({id}) =>id === notesId);
if (noteObj){
  return res.json(noteObj);
}

res.json({
  message:"Note is not found!"

});
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});


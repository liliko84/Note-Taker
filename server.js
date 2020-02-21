const express = require('express');
const {notes} = require("./DB/notes.json");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get("/api/notes",(req,res)=>{
  res.json(notes)
});

app.get("/api/notes/:id",(req,res)=>{
  const noteId = req.params.id;

})
const noteToReturn = notes.find(({id}) =>id === notesId);
if (noteToReturn){
  return res.json(noteToReturn);
}

res.json({
  message:"Recipe is not found!"

});

/* 
// Use apiRoutes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
 */
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});


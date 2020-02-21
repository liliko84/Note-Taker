const router = require('express').Router()
const path = require('path')

router.get('/notes', function(req, res){
  res.sendFile(path.join(__dirname, '../public/note.html'))
})

module.exports = router
/* const http = require('http');
const fs = require('fs')
const PORT = 8080;

const server = http.createServer(handleRequests)

function handleRequests(req, res) {

  switch (req.url) {
    case '/api/notes':
      switch (req.method) {
        case 'GET':
          // app.get('/api/notes)
          break;
        case 'POST':
          //  app.post('/api/notes')
          postNotes(req, res)
          break;
      }
      break;
    case '/':
      // render home page
      renderHome(req, res)
      break;
    case '/notes':
      // render home page
      renderNotes(req, res)
      break;
    default:
      console.log("No Matching route", req.url)
      res.writeHead(404)
      res.end()
      break;

  }

}

function renderNotes(req, res) {
  fs.readFile('./public/note.html', 'utf8', function (err, html) {
    if (err) throw err;

    res.writeHead(200, {
      "Content-Type": "text/html"
    })
    res.end(html)
  })
}

function renderHome(req, res) {
  fs.readFile('./public/index.html', 'utf8', function (err, html) {
    if (err) throw err;

    res.writeHead(200, {
      "Content-Type": "text/html"
    })
    res.end(html)
  })
}

function postNotes(req, res) {
  var data = ""
  req.on('data', function (body) {
    console.log('data', data)
    data += body
  })
  req.on('end', function () {


    data = data.split("&")
    var myObj = {}
    for (let item of data) {
      console.log(item)
      item = item.split("=")
      myObj[item[0]] = item[1].replace("+", " ")
    }
    console.log(myObj)
    res.writeHead(200)
    res.end()
  })
}

server.listen(PORT, function () {
  console.log("server listening on PORT: ", PORT)
}) */
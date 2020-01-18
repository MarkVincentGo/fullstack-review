const express = require('express');
// added modules
const helpers = require('../helpers/github.js');
const database = require('../database/index.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json())

app.post('/repos', function (req, res) {
  let username = req.body.username;
  helpers.getReposByUsername(username, (err, body) => {
    console.log(body.res)
    /////// ok here is where i utilize the save function
    database.save(JSON.parse(body.body), (err, success) => {
      if (err) {
        res.send(err)
      } else {
        res.send(success)
      }
    })

  })
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  let list = database.retrieve(';lkjdnv', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


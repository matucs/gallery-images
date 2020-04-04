const express = require('express');
const app = express();
let fetch = require('axios');
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/allImages', function (req, res) {
  fetch('https://api.imgur.com/' + req.query.showId + '/gallery/' +
    req.query.section + '/' + req.query.sort + '/' + req.query.window + '/'
    + req.query.page + '?showViral=' + req.query.showViral,
    { headers: { 'Authorization': req.headers['authorization'], "Content-Type": "application/json" } })
    .then(response => {
      res.send(response.data.data);
    }).catch(err => {
      console.log(err);
    });
});


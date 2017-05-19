const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


let app = express();

// set static path
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
// define routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', function(req,res) {
    res.redirect('/about.html');
});

app.get('/contact', function (req, res) {
  res.redirect('/contact.html');
});

app.get('/info', function(req, res) {
    res.download('public/sample.pdf');
});

app.post('/subscribe', function(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  console.log(name + ' has been subscribed with the email: ' + email);
  res.redirect('/index.html');
});



app.listen(5000, function() {
  console.log('Server started on port 5000');
});

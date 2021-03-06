const express = require("express");
const app = express();
const exphbs = require('express-handlebars');
const fs = require("fs");
const menuData = require("./data/menu");


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// The extensions 'html' allows us to serve file without adding .html at the end 
// i.e /my-cv will server /my-cv.html
app.use(express.static("public", { 'extensions': ['html'] }));

// app.get (path, handle)

app.get('/', function (req, res) {
  res.render("index")
});

app.get('/contact', function (req, res) {
  res.render("index");
});

app.get('/story', function (req, res) {
  res.render("index");
});


app.get('/reservation', function (req, res) {
  res.render("reservations")
});


app.get('/menu', function (req, res) {
  res.render('food',
      {
       menu: menuData
      });
});


// what does this line mean: process.env.PORT || 3000
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
// jshint esversion:6

const express = require('express');

const app = express();


app.get("/", function(req, res) {
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res) {
    res.send("<h1>Contact me at</h1>");
});

app.get("/about", function(req, res) {
    res.send("<h1>I am an incoming Web Developer</h1>");
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>analytics</li><li>Code</li></ul>");
});


app.listen(3000, function() {
    console.log("server started on port 3000")
});
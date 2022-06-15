// jshint esversion: 6


const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public")); // making the css and image folder publicly available with server


// calling in the signup.html file
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});



app.listen(3000, function() {
    console.log("Running on port 3000");
});
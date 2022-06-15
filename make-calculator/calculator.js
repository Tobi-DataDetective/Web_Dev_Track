// jshint esversion:6

const express = require('express');
const bodyParser = require('body-Parser'); //Allows for the parsing of values through the server


// Returns for all imports
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


//routing to home directory
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// passing a get to handle the post attribute in the html 
app.post("/", function(req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

// Routing to bmicalc directory
app.get("/bmicalc", function(req, res) {
    res.sendFile(__dirname + "/bmicalc.html");
});

// passing a get to handle the post attribute in the html 
app.post("/bmiCalc", function(req, res) {

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (weight * height);

    res.send("Your BMI is " + bmi);
});


app.listen(3000, function() {
    console.log("server started on port 3000");
});
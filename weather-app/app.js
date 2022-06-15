// importing necessary libraries
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")


const app = express(); //initializing the express library

app.use(bodyParser.urlencoded({ extended: true })); // initializing the body parser which allows to seive throught the html file

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    // connecting to api

    const query = req.body.cityName; // passing in the input value from the html
    const appid = "a37f7763c738ef9868466660b464c130";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appid + "&units=" + unit;

    https.get(url, function(response) {
        console.log(response.statusCode); //returning the statusCode

        response.on("data", function(data) {

            //console.log(data) //returning some kind of hexadecimal data
            const weatherData = JSON.parse(data) // converting the hexadecimal data to a JSON format
            console.log(weatherData);

            // tapping into the json file to get the temperature
            const temp = weatherData.main.temp;
            console.log(temp);

            // using the JSON viewer in chrome to print out the weather description
            const descr = weatherData.weather[0].description;
            console.log(descr);

            // including icon 
            const icon = weatherData.weather[0].icon;
            const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

            // sending or displaying the result we want the client to see
            res.write("<p>The weather is currently " + descr + "</p>");
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees. </h1>");
            res.write("<img src=" + imgURL + ">");
            res.send();

            // trying to revearse the case, from JSON to hex
            const object = {
                name: "tobi",
                age: "25"
            }
            console.log(JSON.stringify(object));


        });
    });






    // displaying an output
    // res.send("Server is up and running");


    // console.log("Post received");
});



app.listen(3000, function() {
    console.log("Running on port 3000");
});

// Remove all console logs in real projects cos they are not necessary
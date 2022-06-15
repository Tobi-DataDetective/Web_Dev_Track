//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { url } = require("inspector");
const { options } = require("request");
const { json } = require("body-parser");

const app = express();

//list id: 5f482e1d0e
// api key: 7bebce77391ca764ea7cab04a5076be7-us13

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

// home route
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;


    var data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }

        }]
    }

    //list id: 738060a7ab

    // api key: 1b7e93caf6c6685ec8b158c048440756-us9
    const jsonData = JSON.stringify(data);
    const url = "https://us9.api.mailchimp.com/3.0/lists/738060a7ab"

    const options = {
        method: "post",
        auth: "folayan:1b7e93caf6c6685ec8b158c048440756-us9"
    }

    const request = https.request(url, options, function(response) {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }


        response.on("data", function(data) {
            console.log(JSON.parse(data))
        });
    });
    request.write(jsonData);
    // console.log(firstName, lastName, email);
    request.end();
});

app.post("/failure", function(req, res) {
    res.redirect("/");
});


app.listen(process.env.PORT || 3000, function() {
    console.log("Running on port 3000");
});
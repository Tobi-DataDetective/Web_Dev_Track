//list id: 738060a7ab

// api key: 1b7e93caf6c6685ec8b158c048440756-us9


const mailchimp = require("@mailchimp/mailchimp_marketing");
const { response } = require("express");
const express = require('express');
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); // making the css and image folder publicly available with server
app.use(bodyParser.urlencoded({ extended: true })) //making use of the bodyparser library


mailchimp.setConfig({
    apiKey: "1b7e93caf6c6685ec8b158c048440756-us9",
    server: "us9"
});

// calling in the signup.html file
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

// app.get('/audience', async(req, res, next) => {
//     const response = await mailchimp.lists.getListMember("738060a7ab");
//     console.log(response);
//     res.status(200).json(response);
// });

app.post('/', async(req, res, next) => {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstName, lastName, email);

    // const { email, status } = req.body
    const response = await mailchimp.lists.addListMember("738060a7ab", {
        email_address: email,
        status: "subscribed",
        merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
        }
    });
    res.status(200).json(response);
});





app.listen(3000, function() {
    console.log("Running on port 3000");
});
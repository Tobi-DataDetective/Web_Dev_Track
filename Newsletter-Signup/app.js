// jshint esversion: 6
//list id: 5f482e1d0e
// api key: 7bebce77391ca764ea7cab04a5076be7-us13


const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


// implementing the mail-chimp API
// const mailchimp = require('@mailchimp/mailchimp_marketing');

// mailchimp.setConfig({
//     apiKey: '7bebce77391ca764ea7cab04a5076be7-us13',
//     server: 'us13',
// });


const mailchimp = require('@mailchimp/mailchimp_marketing');
mailchimp.setConfig({
    apiKey: "7bebce77391ca764ea7cab04a5076be7-us13",
    server: "us13",
});

const app = express();

app.use(express.static("public")); // making the css and image folder publicly available with server
app.use(bodyParser.urlencoded({ extended: true })) //making use of the bodyparser library

// calling in the signup.html file
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

// creating the post route
app.post("/", function(req, res) {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastName, email);


    const listId = "5f482e1d0e";
    const subscribingUser = {
        firstNames: firstName,
        lastNames: lastName,
        emails: email
    };

    async function addMember() {
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: subscribingUser.emails,
            status: "subscribed",
            merge_fields: {
                FNAME: subscribingUser.firstNames,
                LNAME: subscribingUser.lastNames
            }
        });

        console.log(
            `Successfully added contact as an audience member. The contact's id is ${
          response.id
        }.`
        );
    }

    addMember();

    // // posting with mail chimp API in use
    // const addMember = async() => {
    //     const response = await mailchimp.lists.addListMember("5f482e1d0e", {
    //         email_address: email,
    //         status: "subscribed",
    //         merge_fields: {
    //             FNAME: subscribingUser.firstName,
    //             LNAME: subscribingUser.lastName
    //         }
    //     });
    //     // console.log(response);
    // };

    // addMember();
});


app.listen(3000, function() {
    console.log("Running on port 3000");
});
//jshint esversion:6

require('dotenv').config(); //a pacakage required during level 3 encryption
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption"); //a package required during level 2 encryption 

const app = express();

console.log(process.env.API_KEY);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// connecting Database
mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });

// creating schema, the "new mongoose.Schema()" keyword allows for making encryption and mongoose schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// defining a secret,(for password encryption) then implementing it
// const secret = "Thisisourlittlesecret.";   -----now in the .env file
// userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] });  -- converted to the below code
userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ['password'] });


// creating model

const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res) {
    res.render("home");
});


app.get("/login", function(req, res) {
    res.render("login");
});


app.get("/register", function(req, res) {
    res.render("register");
});

// creating the register route
app.post("/register", function(req, res) {
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });
    // saving the new user
    newUser.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.render("secrets"); //encrypting the password in the DB
        }
    });
});

// creating the login route
app.post("/login", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ email: username }, function(err, foundUser) {
        if (err) {
            console.log(err)
        } else {
            if (foundUser) {
                if (foundUser.password === password) {
                    res.render("secrets");
                }
            }
        }
    });
});


app.listen(3000, function() {
    console.log("Running on port 3000");
});
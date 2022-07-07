//jshint esversion:6

require('dotenv').config(); //a pacakage required during level 3 encryption
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

// implementing passport libraries
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');


const app = express();


app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// calling in the passport session library
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

// initializing the passport
app.use(passport.initialize());
app.use(passport.session());

// connecting Database
mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });

// handling passport deprecation
// mongoose.set("useCreateIndex", true);


// creating schema, the "new mongoose.Schema()" keyword allows for making encryption and mongoose schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// enabling the passportLocalMongoose package
userSchema.plugin(passportLocalMongoose);

// creating model

const User = new mongoose.model("User", userSchema);

// enabling the passport on the schema
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res) {
    res.render("home");
});


app.get("/login", function(req, res) {
    res.render("login");
});


app.get("/register", function(req, res) {
    res.render("register");
});

app.get("/secrets", function(req, res) {
    if (req.isAuthenticated()) {
        res.render("secrets");
    } else {
        res.redirect("/login");
    }
});
// creating a logout route
app.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

// creating the register route
app.post("/register", function(req, res) {
    User.register({ username: req.body.username }, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            });
        }
    });
});

// creating the login route
app.post("/login", function(req, res) {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            });
        }
    });
});


app.listen(3000, function() {
    console.log("Running on port 3000");
});
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

// OAUTH library
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');


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
    password: String,
    googleId: String,
    secret: String
});

// enabling the passportLocalMongoose and findOrCreate package/plugin
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// creating model

const User = new mongoose.model("User", userSchema);

// enabling the passport on the schema
passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// replacing the above serializeUser and deserializeUser
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// initializing the google strategy
passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/secret",
        userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    function(accessToken, refreshToken, profile, cb) {
        console.log(profile);

        user.findOrCreate({ googleId: profile.id }, function(err, user) {
            return cdb(err, user);
        });
    }
));

app.get("/", function(req, res) {
    res.render("home");
});



// oauth path route
app.get("/auth/google", function(req, res) {
    passport.authenticate("google", { scope: ["profile"] });
});
app.get("/auth/google/secret",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function(req, res) {
        // successful authentication, redirect to secrets.
        res.redirect('/');
    });



app.get("/login", function(req, res) {
    res.render("login");
});


app.get("/register", function(req, res) {
    res.render("register");
});

app.get("/secrets", function(req, res) {
    User.find({ "secret": { $ne: null } }, function(err, foundUsers) {
        if (err) {
            console.log(err);
        } else {
            if (foundUsers) {
                res.render("secrets", { usersWithSecrets: foundUsers });
            }
        }
    });


    // if (req.isAuthenticated()) {
    //     res.render("secrets");
    // } else {
    //     res.redirect("/login");
    // }
});

// submit get route
app.get("/submit", function(req, res) {
    if (req.isAuthenticated()) {
        res.render("submit");
    } else {
        res.redirect("/login");
    }
});
// submit post route
app.post("/submit", function(req, res) {
    const submittedSecret = req.body.secret;

    console.log(req.user.id);

    User.findById(req.user.id, function(err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                foundUser.secret = submittedSecret;
                foundUser.save(function() {
                    res.redirect("/secrets");
                });
            }
        }
    });
});

// creating a logout route
app.get("/logout", function(req, res, next) {
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



// npm install passport-google-oauth20
// npm install mongoose-findorcreate
// evm keys
// social buttons for bootstrap, place file in public. css level
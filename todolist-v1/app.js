const bodyParser = require("body-parser");
const express = require("express");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs"); // checks into the views folder for ejs file
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res) {
    var today = new Date();
    // var currentDay = today.getDay();
    // var day = "";

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);


    res.render("list", { kindOfDay: day, newListItems: items }); //kindOfDay = to variable made in the list.ejs file
});


app.post("/", function(req, res) {
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});


app.listen(3000, function() {
    console.log("Running on port 3000");
});
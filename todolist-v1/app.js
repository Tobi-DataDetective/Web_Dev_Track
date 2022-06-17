const bodyParser = require("body-parser");
const express = require("express");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs"); // checks into the views folder for ejs file
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function(req, res) {
    let today = new Date();
    // let currentDay = today.getDay();
    // let day = "";

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);


    res.render("list", { kindOfDay: day, newListItems: items }); //kindOfDay = to letiable made in the list.ejs file
});


app.post("/", function(req, res) {
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});


app.listen(3000, function() {
    console.log("Running on port 3000");
});
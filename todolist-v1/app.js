const bodyParser = require("body-parser");
const express = require("express");
const date = require(__dirname + "/date.js") // initiating the date.js file

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];
app.set("view engine", "ejs"); // checks into the views folder for ejs file
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function(req, res) {

    const day = date.getDay(); // activating the date.js file

    res.render("list", { listTitle: day, newListItems: items }); //kindOfDay = to constiable made in the list.ejs file
});


app.post("/", function(req, res) {
    // console.log(req.body);
    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", function(req, res) {
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function(req, res) {
    res.render("about");
});


app.listen(3000, function() {
    console.log("Running on port 3000");
});
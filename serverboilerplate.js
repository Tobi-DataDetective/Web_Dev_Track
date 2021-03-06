const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", function(req, res) {
    res.send("Server is up and running");
});



app.listen(3000, function() {
    console.log("Running on port 3000");
});
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");



const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


// connecting mongoDB
mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true });

// creating the schema
const articleSchema = {
    title: String,
    content: String
};

// Creating Model
const Article = mongoose.model("Article", articleSchema);


// TODOs //

// fetching all articles in the wikiDB
app.get("/articles", function(req, res) {
    Article.find(function(err, foundArticles) {
        res.send(foundArticles);
    });
});



app.listen(3000, function() {
    console.log("Running on port 3000");
});
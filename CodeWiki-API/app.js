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

//////////////////////////////Targetting All Articles//////////////////////////
// using the chaining route format i.e app.route("/articles").get().post().delete()

app.route("/articles")
    // creating a get route. fetching all articles in the wikiDB
    .get(function(req, res) {
        Article.find(function(err, foundArticles) {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        });
    })
    // creating a post request
    .post(function(req, res) {
        // console.log(req.body.title);
        // console.log(req.body.content);


        // allows client to insert from UI/ postman
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        newArticle.save(function(err) {
            if (!err) {
                res.send("Successfully Added");
            } else {
                res.send(err);
            }
        });
    })
    // allow client to delete records
    .delete(function(req, res) {
        Article.deleteMany(function(err) {
            if (!err) {
                res.send("Successfully Deleted all articles");
            } else {
                res.send(err);
            }
        });
    });

//////////////////////////////Targetting A Specific Article//////////////////////////


app.route("/articles/:articleTitle")
    // getting an article inputed by the user
    .get(function(req, res) {
        Article.findOne({ title: req.params.articleTitle }, function(err, foundArticle) {
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send("Article title does not exist!");
            }
        });
    })
    // updating the title and content symonthenously
    .put(function(req, res) {
        Article.updateOne({ title: req.params.articleTitle }, { $set: { title: req.body.title, content: req.body.content } }, { overwrite: true },
            function(err) {
                if (!err) {
                    res.send("Successfully Updated!");
                }
            });
    })
    // allowing for user input of what to update
    .patch(function(req, res) {
        Article.updateOne({ title: req.params.articleTitle }, { $set: req.body },
            function(err) {
                if (!err) {
                    res.send("Successfully Updated!");
                } else {
                    res.send(err);
                }
            });
    })
    // Deleting a particular article from the database
    .delete(function(req, res) {
        Article.deleteOne({ title: req.params.articleTitle },
            function(err) {
                if (!err) {
                    res.send("Successfully Deleted!");
                } else {
                    res.send(err);
                }
            });
    });

app.listen(3000, function() {
    console.log("Running on port 3000");
});

// postmon link: http://localhost:3000/articles/Alcohol
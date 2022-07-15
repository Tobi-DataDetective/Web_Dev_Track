const mongoose = require("mongoose")

// Create a connection
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

// create a schema with validations
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check data entry no name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

// create a model
const Fruit = mongoose.model("Fruit", fruitSchema);

// creating the document

const fruit = new Fruit({
    rating: 10,
    review: "Great Fruit"
});


const pineapple = new Fruit({
    name: "Pineaple",
    rating: 9,
    review: "Great fruit"
})
pineapple.save()

const mango = new Fruit({
    name: "Mango",
    rating: 6,
    review: "Yellow fruit"
});

mango.save();


// fruit.save(); //save the fruit document with the Fruit model inside out fruitsDB

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);


const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple
});

person.save()


// updating Davids previous recored with a favourite fruit attribute
Person.updateOne({ name: "David" }, { favouriteFruit: mango }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("successfully Updated the document");
    }
});
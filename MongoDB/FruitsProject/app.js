const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'fruitsDB';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('fruits');

    // the following code examples can be pasted here...

    // // inserting values to the document
    // const insertResult = await collection.insertMany([{
    //         name: "Apple",
    //         score: 8,
    //         review: "Great Fruit"
    //     }, {
    //         name: "Orange",
    //         score: 6,
    //         review: "Kinda Sour"
    //     }, {
    //         name: "Banana",
    //         score: 9,
    //         review: "Great Stuff!"
    //     }

    // ]);
    // console.log('Inserted documents =>', insertResult);


    // Finding all documents

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';
}



main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
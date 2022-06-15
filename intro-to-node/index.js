//jshint esversion:6

// const fs = require("fs");

// fs.copyFileSync("file.txt", "file2.txt");

// // console.log("Hello world");


const superheroes = require('superheroes');
const supervillains = require('supervillains');


var mySuperheroName = superheroes.random();
var mySuperVillain = supervillains.random();

console.log(mySuperheroName);
console.log(mySuperVillain);
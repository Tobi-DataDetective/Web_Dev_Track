// import animals , {useAnimals} from "./data";\

// // console.log(animals);

// // // destructuring an array
// const [cat,dog] = animals;
// // console.log(cat);

// // // destructuring an object: must carry the property name of the objects
// // // const {name, sound}= cat;
// // // to give this properties a unique name we do the following
// // const {name: catName, sound: catSound}= cat;
// // console.log(catName);


// // // Giving name and sound a custom value
// // // here is simply saying if name is undefined in the data,js file use fluffy
// // const {name ="fluffy", sound: "purr"}= cat;
// // console.log(name);


// // // logging out the foodRequirements in the data.js file

// // const{name,sound,foodRequirements:{food,water}}=cats;
// // console.log(food
// //   )


// // operation with the useAnimal function in the data.js file
// console.log(useAnimals(cat));
// const [animal, makeSound]= useAnimal(cat);
// console.log(animal);
// makeSound();





// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

console.log(cars);


const [honda, tesla]=cars;

const {speedStats:{topSpeed: hondaTopSpeed}}= honda;
const {speedStats:{topSpeed: teslaTopSpeed}}= tesla;

const {coloursByPopularity:[hondaTopColour]}=honda;
const {coloursByPopularity:[teslaTopColour]}=tesla;





ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
 
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const time = date.getHours();

let greeting;
if (time > 12) {
    greeting = "Good Afternnon";
} else if (time > 18) {
    greeting = "good evening"
} else {
    greeting = "goot morning"
}


ReactDOM.render( < h1 > { greeting } < /h1>, document.getElementById('root'));
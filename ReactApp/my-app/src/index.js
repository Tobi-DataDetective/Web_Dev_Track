import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let day;

const customeStyling = {
    color: ""
};

if (currentTime < 12) {
    day = "Morning";
    customeStyling.color = "blue";
} else if (currentTime < 18) {
    day = "Afternoon";
    customeStyling.color = "red";
} else {
    day = "Evening";
    customeStyling.color = "black";
}

ReactDOM.render( <
    h1 className = "heading"
    style = { customeStyling } >
    Good { day } <
    /h1>,
    document.getElementById('root')
);
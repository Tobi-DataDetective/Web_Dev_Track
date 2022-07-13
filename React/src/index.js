// import React from "react";
// import ReactDom from "react-dom";

// const number = 7;

// const fName = "Tobi";
// const lName = "Folayan";


// // ReactDom.render(WHAT TO SHOW, WHERE TO SHOW IT)
// ReactDom.render(
//   <div>
//     <h1 className="heading">Hello {fName +" "+ lName}</h1>
//     <p>This is your lucky number {number}</p>
//   </div>,
//   document.getElementById("root")
// );


// ///////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import ReactDom from "react-dom";


// const fName = "Tobi";
// const currentDate = new Date();
// const year = currentDate.getFullYear();

// ReactDom.render(
//     <div>
//         <h1>created By {fName}</h1>
//         <p>Copyright {year}</p>
//     </div>,
//     document.getElementById("root")
// );



///////////////////////////////////////////////////

// STYLING //

// import React from "react";
// import ReactDom from "react-Dom";

// ReactDom.render(
// <div>
// <h1 className="heading">My Favorite food</h1>
// <ul>
// <li>Beacon</li>
// <li>Jamon</li>    
// <li>Noodles</li>    
// </ul>     
// </div>,
// document.getElementById("root")
// );


// React Styling
import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
};

customStyle.color = "blue";

ReactDOM.render( <
    h1 style = { customStyle } > Hello World! < /h1>,
    document.getElementById("root")
);


///////// Greeting


//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.



import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
    color: ""
};

if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
} else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
} else {
    greeting = "Good Night";
    customStyle.color = "blue";
}

ReactDOM.render( <
    h1 className = "heading"
    style = { customStyle } > { greeting } <
    /h1>,
    document.getElementById("root")
);



// REACT COMPONENT
import React from "react";
import ReactDom from "react-dom";
import Heading from "./Heading";
import List from "./List";


ReactDOM.render( <
    App / > ,
    document.getElementById("root"));
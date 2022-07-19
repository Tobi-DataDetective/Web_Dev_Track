// Declarative Programing

// import React from "react";

// function App(){

//   var isDone = false;
// const strikeThrough = {textDecoration:"line-through"}

//   return <p style={isDone ? strikeThrough:null}>Buy Milk</p>
// }

// export default App;

// Imperative Programming

import React from "react";

// button funtion
function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}
function unStrike() {
  document.getElementById("root").style.textDecoration = null;
}
function App() {
  return (
    <div>
      <p>Buy Milk</p>
      <button onClick={strike}>Strike</button>
      <button onClick={unStrike}>Unstrike</button>
    </div>
  );
}

export default App;

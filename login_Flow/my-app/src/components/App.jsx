import React from "react";
import Login from "./Login";

var isLoggedIn = true;

const currentTime = new Date(2022, 11, 1, 13).getHours();

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

// function App() {
//   return <div className="container">{renderConditionally()}</div>;
// }

// The aboves were refactored to the below codes
// function App() {
//   return (
//     <div className="container">
//       {isLoggedIn ? <h1>Hello</h1> : <Login />}
//       {currentTime > 12 ? <h1>Why are you still working</h1> : null}
//     </div>
//   );
// }

// using the AND operator
function App() {
  return (
    <div className="container">
      {currentTime > 12 && <h1>Why are you still working</h1>}
    </div>
  );
}

export default App;

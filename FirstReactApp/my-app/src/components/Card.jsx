// import React from "react";

// function Note() {
//   return (
//     <div className="note">
//       <h1>The Last Air Bender</h1>
//       <p>Earth, Water, Air and fire the whiler of the four elements</p>
//     </div>
//   );
// }

// export default Note;

import React from "react";

function Card(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;

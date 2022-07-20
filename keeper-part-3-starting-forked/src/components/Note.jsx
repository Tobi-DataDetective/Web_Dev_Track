import React from "react";

/*
- coming from the app.jsx file 
- we add an onClick attribute to the delete button
- create a]n helper function call handleClick()\
- jumping back to the App.jsx we create another below the addNote which would be deleteNote
- coming back from the app.jsx .........
- we continue the handleClick function to tap into the props.onDelete, and thats going to trigger the function in app.jsx



- next we go back to the app.jsx file to actually implement the deleting function to remove notes from the notes array....

-........coming back from the app.jsx
- we pass in a props.id in the props.onDelete()


- next we want to clear out every entery inputed, so we go to the createArea.......
*/

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;

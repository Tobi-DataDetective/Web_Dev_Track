import React, { useState } from "react";
/* 
- having a state to keep both the title and the content tied
- passing the note.title and note.content from the declared state to the form input and textarea places
- Next is to create an update function to update them when they get changed,
- i.e inside the input and textarea we add an onChange={}
- create a function called handleChange as an helper function for the onChange
- pass the handleChange into the {} for the onChange
- handlechange is going to take in an event
- the in the handleChange we create a destructured object, to tap into both name and value
- add to the note by calling setNote


- next we try to pass this saved note to the app
- to do this we add an onClick functionality to the button
- create an helper function i.e submitNote, for this onClick button property
- pass an event to the submit note
- next is to trigger a function that can pass this note to the app.jsx file
- to do this we create a addNote function in the app.jsx file......
- .....we add the onAdd props to the CreateArea function: but allowing an intake of props
- then passing into the submitNote function a props.onAdd() then we pass the note as an input i.e props.onAdd(note)

- next is to add this notes to an array, and this would happen in app.jsx.....


- coming from the note.jsx ........
- we call a setNote into the submitNote function

*/
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    // - the in the handleChange we create a destructured object, to tap into both name and value
    const { name, value } = event.target;
    //  we can use the name and value as seperate constants

    // - add to the note by calling setNote-prevNote function
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);

    setNote({
      title: "",
      content: ""
    });

    // the prevent default stops the form from refreashing
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

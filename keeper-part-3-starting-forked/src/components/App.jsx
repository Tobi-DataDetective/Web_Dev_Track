import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

/*
  - creating the addNote function
  - it would receive the note object and do something with that note object
  - this addNote is added to one of the props for the createArea below (we named the prop onAdd)
  - then we trigger this add note by getting hold oof the CreateArea file and adding this props.....
  
  - ....coming from the CreateArea
  - create an array of notes which would need a state
  - create a const [notes, setNotes] = use.... as seen below, with an empty array
  - create a setNotes function in the addNote function to add this notes to the array
  - note that from the above we use the spread operator to get all of the previous notes


  - next step is to take the array and render seperate note components for each item.
  - so below we create a map fnction to map the notes inside the array
  - now we delete that static note below it


  - NEXT STEP IS TO IMPLEMENT THE DELETE BUTTON
  - we move to the note.jsx file where we have the delete button
  - coming back from the note.jsx file
  - we create the deleteNote fucntion
  - the delete note would take in the id of the note that needs to be deleted
  - then the function is going to be passed on to each of the notes that gets rendered as a property, as displayed below
  - so like the above indicated, we add an onDelete property taking the helper function i.e deleteNote
  - next we go back to the note.jsx file to handleClick section.....


  - coming back from the notes.jsx...
  - we go to the deleteNote function to setup a note deletion from the notes array
  - to do this we use the filter functio to loop through the elements in the array and get the id to be removed

  - the last thing we do is to pass over the index to the deleteNote, for the note that is been deleted
  - Now go to the <Note/> section below to add a key and id attribute......
  - to create this unique id, we go to the map function and add a second parameter, which is the index
  - we would use the index as both the key and the id
  - this id can now be picked up inside the note.jsx component 
  - going back to note.jsx component to pass in a props.id

  */

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    // console.log("this delete was triggered")

    // allowing for deletion from the previous or made list or array
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

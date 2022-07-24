import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Notes from "./Notes";

// a mapping helper function, with just 2 intakes i.e title and

function App() {
  // Initial state of the Notes available
  const [availableNote, setNotes] = useState(Notes);

  //   helper function to delete a note for the availableNotes
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((notes, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      {availableNote.map((notes, index) => {
        return (
          <Card
            key={index}
            id={index}
            title={notes.title}
            content={notes.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;

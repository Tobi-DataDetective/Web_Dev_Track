import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import notes from "../notes";

// function createCard(notes) {
//   return <Card key={notes.key} title={notes.title} content={notes.content} />;
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       {notes.map(createCard)}
//       <Footer />
//     </div>
//   );
// }

// refactoring the above code
function App() {
  return (
    <div>
      <Header />
      {notes.map((notes) => (
        <Card key={notes.key} title={notes.title} content={notes.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Notes from "./Notes";

function notesToCard(Notes) {
  return <Card title={Notes.title} content={Notes.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {Notes.map(notesToCard)}
      <Footer />
    </div>
  );
}
export default App;

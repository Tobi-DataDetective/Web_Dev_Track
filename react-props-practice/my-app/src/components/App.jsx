import React from "react";
import Card from "./card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contacts) {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contact</h1>
      <Avatar img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" />
      {contacts.map(createCard)}
    </div>
  );
}
export default App;

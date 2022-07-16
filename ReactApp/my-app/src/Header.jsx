import React from "react";

function Header() {
  const date = new Date();
  const time = date.getHours();
  let greeting;

  const customStyle = {
    color: "",
  };

  if (time > 12) {
    greeting = "Good afternoon";
    customStyle.color = "red";
  } else if (time > 18) {
    greeting = "Good evening";
    customStyle.color = "green";
  } else {
    greeting = "Good night";
    customStyle.color = "blue";
  }
  return <h1 style={customStyle}> {greeting} </h1>;
}

export default Header;

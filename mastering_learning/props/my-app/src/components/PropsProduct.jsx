import React from "react";
import Item from "./Propsitem";

// function Product(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.description}</h2>
//       <h3>${props.price}</h3>
//     </div>
//   );
// }

// using destructuring below

function Product({ name, description, price }) {
  return (
    <div>
      <Item name={name} description={description} />
      <h3>${price}</h3>
    </div>
  );
}

export default Product;

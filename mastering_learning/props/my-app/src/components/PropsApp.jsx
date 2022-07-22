import React from "react";
import Product from "./PropsProduct";

function App() {
  return (
    <div>
      <h1>Hello Word</h1>
      {/* Product(name, description, price) */}
      <Product name="Amazon" description="your Ai assistant" price={56.94} />
      <Product name="Amazon" description="your Ai assistant" price={56.94} />
      <Product name="Amazon" description="your Ai assistant" price={56.94} />
    </div>
  );
}

export default App;

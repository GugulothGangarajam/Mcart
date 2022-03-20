import React from "react";
import Header from "./Header";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Clothes() {
  const [{ clothes }] = useStateValue();
  return (
    <div>
      <Header />
      <h3 className="t-shirts-title">CLOTHES</h3>
      <div className="shirts">
        {clothes.map((product, index) => (
          <Product {...product} key={`new-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Clothes;

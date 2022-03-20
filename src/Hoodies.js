import React from "react";
import Header from "./Header";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Hoodies() {
  const [{ hoodies }] = useStateValue();
  return (
    <div className="hoodies">
      <Header />
      <h3 className="t-shirts-title">HOODIES & SWEATSHIRTS FOR MEN</h3>
      <div className="shirts">
        {hoodies.map((product, index) => (
          <Product {...product} key={`hoodie-${index}`} />
        ))}
      </div>
    </div>
  );
}
export default Hoodies;

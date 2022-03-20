import React, { useState } from "react";
import Header from "./Header";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function WinterC() {
  const [{ winterc }] = useStateValue();
  return (
    <div>
      <Header />
      <div className="winter">
        <h3 className="t-shirts-title">MENS'S T-SHIRTS & VESTS</h3>
        <div className="shirts">
          {winterc.map((product, index) => (
            <Product {...product} key={`t-shirt-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WinterC;

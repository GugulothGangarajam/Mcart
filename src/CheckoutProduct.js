import React, { useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
  const [{}, dispatch] = useStateValue();
  const { image, discount, productName, productPrice, id, isLiked, cloth } =
    props;
  // const [flag, setFlag] = useState(true);
  const remove = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="image" className="checkoutProduct__image" />
      <span className="checkoutProduct__off">{discount}</span>
      <h6 className="checkoutProduct__shirt_name">{productName}</h6>
      <span className="checkoutProduct__price">Rs.{productPrice}</span>
      <span className="checkProduct__id">Art.no. {id}</span>
      <button className="checkoutProduct__remove" onClick={remove}>
        Remove from Bag
      </button>
    </div>
  );
}

export default CheckoutProduct;

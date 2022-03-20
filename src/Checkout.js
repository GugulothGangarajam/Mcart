import React from "react";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout-left">
          {basket?.length === 0 ? (
            <div>
              <h1>Your Shopping Bag is empty</h1>
              <p>
                Your have no items in your Bag. To buy one or more items, click
                "ADD" next to the item
              </p>
            </div>
          ) : (
            <div>
              <h1 className="checkout__title">Your Shopping Bag</h1>
              {basket.map((item) => (
                <CheckoutProduct {...item} />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
            {/* Subtotal */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;

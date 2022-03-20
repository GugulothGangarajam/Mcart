import React from "react";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import FavouriteProduct from "./FavouriteProduct";
import "./Favourites.css";

function Favourites() {
  const [{ favourites }, diapatch] = useStateValue();
  return (
    <div>
      <Header />
      <div className="favourites">
        <div className="favourite">
          {favourites?.length === 0 ? (
            <div>
              <h1>Favourites</h1>
              <h2>SAVE YOUR FAVOURITE ITEMS</h2>
              <p>
                Want to save the items that you love? Just click on the heart
                symbol beside the item and it will show up here.
              </p>
            </div>
          ) : (
            <div>
              <h1 className="favourite__title">Favourites</h1>
              <div className="shirts">
                {favourites.map((item) => (
                  <FavouriteProduct {...item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favourites;

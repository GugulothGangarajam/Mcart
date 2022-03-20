import React, { useState } from "react";
import "./FavouriteProduct.css";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useStateValue } from "./StateProvider";
import "./FavouriteProduct.css";
const useStyles = makeStyles({
  delete: {
    position: "relative",
    left: "-120px",
    top: "-13px",
    width: "30px",
    height: "30px",
    borderRadius: "230px",
    backgroundColor: "white",
    cursor: "pointer",
  },
});

function FavouriteProduct(props) {
  const [{}, dispatch] = useStateValue();
  const { image, discount, productName, productPrice, id, cloth, isLiked } =
    props;
  const classes = useStyles();
  const change = () => {
    //     setFlag(!flag);
    dispatch({
      type: "REMOVE_FROM_FAVOURITE",
      item: {
        id: id,
        cloth: cloth,
        isLiked,
      },
    });
  };
  const addToBag = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        productName: productName,
        image: image,
        productPrice: productPrice,
        discount: discount,
      },
    });
  };
  return (
    <div className=" shirt">
      <img src={image} alt="t-shirt" />
      <span className="off">{discount}</span>
      <DeleteOutlineIcon onClick={change} className={classes.delete} />
      <h6 className="Fav-shirt-name">{productName}</h6>
      <span className="Fav-price">Rs.{productPrice}</span>
      <h6 className="Fav-buy" onClick={addToBag}>
        Add
      </h6>
    </div>
  );
}

export default FavouriteProduct;

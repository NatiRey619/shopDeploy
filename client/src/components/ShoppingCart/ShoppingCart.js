import React from "react";
import App from "../../Main";
import { useState, useEffect } from "react";
import Products from "../Products/Products";
import ProductInfo from "../Product/Product-Info";
import ProductImage from "../Product/Product-Image";
import MyContext from "../../MyContext";
import { useContext } from "react";
import { Card } from "@mui/material";
import TotalCartSum from "./TotalCartSum";

const ShoppingCart = () => {
  const { cart, setCart } = useContext(MyContext);
  const [removeByIndex, setRemoveByIndex] = useState({});
  const [itemIndex, setitemIndex] = useState(1);
  const [removedItem, setRemovedItem] = useState({});

  const removeProduct = (id) => {
    const clone = [...cart];
    setCart(clone.filter((product) => product.ProductID !== id));
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // const quantityPlus = () => {
  //   setQuantity(quantity + 1);
  // };

  // const quantityMinus = () => {
  //   setQuantity(quantity - 1);
  // };

  // useEffect(() => {
  //   console.log(quantity);
  // }, [quantity]);

  return (
    <div className="ShoppingCart">
      {cart.map((p) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            alignContent: "center",
          }}
          className="CartProduct"
          key={p.ProductID}
        >
          <img src={p.ImageLink} />
          <p>ID : {p.ProductID}</p>
          <p>Name : {p.ProductName}</p>
          <p>Price : {p.ProductPrice}$</p>
          <p>Quantity :{p.ProductAmount}</p>

          <br></br>
          <button onClick={() => removeProduct(p.ProductID)}>
            Remove Item
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;

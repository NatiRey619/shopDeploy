import React, { useContext } from "react";
import "./Product-Info.css";
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useEffect } from "react";
import MyContext from "../../MyContext";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { Card } from "@mui/material";

const ProductInfo = ({ ProductName, ProductPrice, ProductID, ImageLink }) => {
  const { cart, setCart } = useContext(MyContext);
  const [amount, setAmount] = useState(0);

  let { ProdId } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});

  const increment = () => {
    const cartCopy = [...cart];
    console.log(cartCopy);
    const productExist = cartCopy.find((p) => p.ProductID === ProductID);
    // console.log(productExist, ProductID, ProductPrice);
    //situation 2 - there was an item in the cart and i want to increase its amount

    if (productExist) {
      const productExistIndex = cartCopy.findIndex(
        (p) => p.ProductID === ProductID
      );
      cartCopy[productExistIndex].ProductAmount += 1;
      cartCopy[productExistIndex].ProductPrice += ProductPrice;

      setCart(cartCopy);
    } else {
      //situation 1 - there was no such item in the cart

      setCart((prev) => [
        ...prev,
        {
          ProductName,
          ProductPrice,
          ProductID,
          ImageLink,
          ProductAmount: amount + 1,
        },
      ]);
    }
    setAmount(amount + 1);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // const  = () => {
  //   setAmount(amount + 1);
  //   console.log({ProductName, ProductPrice , ProductID })
  // };

  return (
    <div className="product-info">
      <h5>{ProductName}</h5>
      <h6>${ProductPrice}</h6>
      <h6>ID :{ProductID}</h6>
      <p>Amount : {amount}</p>
      <Button
        key={ProductID}
        variant="contained"
        onClick={increment}
        value={ProductID}
      >
        {" "}
        Add to cart
      </Button>
    </div>
  );
};

export default ProductInfo;

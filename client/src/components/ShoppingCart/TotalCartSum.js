import React from "react";
import { useContext } from "react";
import MyContext from "../../MyContext";
import { useState, useEffect } from "react";

const TotalCartSum = () => {
  const { cart, setCart } = useContext(MyContext);
  const { totalSum, setTotalSum } = useState(0);
  const { quantity, setQuantity } = useState(0);

  const findAllSums = () => {
    const clone = [...cart];
    console.log(clone);
    const producPrice = clone.find((p) => console.log(p));
  };
  return (
    <div>
      <p>This is summary Price: Quantity:{cart.product}</p>
    </div>
  );
};

export default TotalCartSum;

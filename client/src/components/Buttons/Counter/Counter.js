import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  // use effect is hook , but only when time chosen - like empty (mounting)
  useEffect(() => {
    console.log("only on mounting/birth of component");
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  // useEffect (() => {},[])
  // getting function and array

  // useEffect(() => {
  //   // something();
  //   console.log("only on birth of comp");
  // }, []);

  // useEffect(() => {
  //   // save data inside
  //   console.log("this is new data");
  // });

  // getAllProducts = async () => {
  //   const response = await fetch("ProductUrl");
  //   const dataReponse = await response.json();
  //   setProducts(data);
  // };

  return (
    <div>
      <button onClick={increment}>+</button>
      <p>count:{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;

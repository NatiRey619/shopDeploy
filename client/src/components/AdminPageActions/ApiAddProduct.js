import React from "react";
import { useContext } from "react";
import MyContext from "../../MyContext";
import { useEffect } from "react";

const ApiAddProduct = () => {
  const { data, setData } = useContext(MyContext);
  console.log(data);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <div className="allProducts">
        {data.map((p) => (
          <div className="Item" key={p.ProductID}>
            <img src={p.image} />
            <p>ID :{p.id}</p>
            <p>Name : {p.title}</p>
            <p>Price : {p.price}$</p>
            <p>Quantity :'null'</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiAddProduct;

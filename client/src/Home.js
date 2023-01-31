import React from "react";
// import Counter from "./components/Buttons/Counter/Counter";
// import Input from "./components/Inputs/Input";
// import ListOfNumbers from "./components/ListOfNumbers/ListOfNumbers";
// import Clock from "./components/Clock/Clock";
// import Comp1 from "./components/Drill/Comp1";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";
import { useState } from "react";
import { useEffect } from "react";
import { useClock } from "./hooks/useClock";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { Drawer } from "@mui/material";
import { Button } from "@mui/material";
import TotalCartSum from "./components/ShoppingCart/TotalCartSum";

const Home = () => {
  // const navigate = useNavigate();
  const clock = useClock();
  const [cartOpen, setCartOpen] = useState(false);
  const [data, setData] = useState([]);
  const [filterProducts, setFilteredProducts] = useState([]);

  const categories = data
    .map((item) => item.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  const onFilterChange = (e) => {
    if (e.target.value === "All products") {
      setFilteredProducts(data);
    } else {
      setFilteredProducts(data.filter((p) => p.category === e.target.value));
    }
  };

  const GetAllProducts = async () => {
    try {
      // const productsURL = "url from Render site after connecting to github"; // get products from Render site
      // const urlProduct = "http://localhost:8000/api/products/getProducts"; // get products from localhost
      const productsReponse = await fetch("https://fakestoreapi.com/products");
      const productsData = await productsReponse.json();
      setFilteredProducts(productsData);
      setData(productsData);

      console.log(productsData);

      //update the state
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    GetAllProducts();
  }, []);

  return (
    <div>
      {/* <button
        onClick={() => {
          navigate("about");
        }}
      >
        go to about page
      </button> */}

      <Nav onFilterChange={onFilterChange} categories={categories} />
      <>
        <Button onClick={() => setCartOpen(true)}>Open Cart</Button>
        <Drawer
          anchor={"right"}
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <div>
            <ShoppingCart />
            <br></br>
            <TotalCartSum />
          </div>
        </Drawer>
      </>

      <h1 style={{ color: "black" }}>{clock}</h1>

      <section className="products">
        <Products data={filterProducts} />
      </section>
    </div>
  );
};

export default Home;

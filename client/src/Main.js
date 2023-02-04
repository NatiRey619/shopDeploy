import "./Home.css"; // importing css for this App.js
import Nav from "./components/Nav/Nav";
import Product from "./components/Product/Product-Image";
import Products from "./components/Products/Products";
import Home from "./Home";
import { useState, useEffect } from "react";
import Clock from "./components/Clock/Clock";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyContext from "./MyContext";
//importing custom hook to main component
import { useClock } from "./hooks/useClock";
import { data } from "./components/data/data.js";
import About from "./components/pages/About";
import YesSir from "./components/pages/YesSir";
import Terms from "./components/pages/Terms";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import SingleProductView from "./components/pages/SingleProductView";
import Admin from "./components/pages/Admin";

function Main() {
  //how to run on array of objects
  const FieldsArr = [
    {
      FieldName: "first name",
      type: undefined,
      placeholder: "enter first name",
    },
    {
      FieldName: "last name",
      type: undefined,
      placeholder: "enter last name",
    },
    {
      FieldName: "nick name",
      type: undefined,
      placeholder: "enter nick name",
    },
  ];
  // on hook return js
  // on componenet returning html
  // הגדרת הcustom hook בקומפוננטה
  const clock = useClock();
  //////// from useClock.js  ////////////////////
  const [cart, setCart] = useState([]);

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

  // when using Browser router - you can navigate from anywhere with those path's
  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{ cart, setCart, data, filterProducts, data, setData }}
      >
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:productId" element={<SingleProductView />} />
          <Route path="about" element={<About />} />
          <Route path="termsOfAgreement" element={<Terms />} />
          <Route path="YesSir" element={<YesSir />} />
          <Route path="AdminPage" element={<Admin />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default Main;

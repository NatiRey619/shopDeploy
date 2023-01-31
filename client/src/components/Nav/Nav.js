import React from "react";
import SortAndFilter from "../SortAndFilter/SortAndFilter";
import Products from "../Products/Products";
import "./Nav.css"; // importing css file for Nav
import { categories } from "../data/data";
import { Slider } from "@mui/material";

const Nav = ({ onFilterChange, categories }) => {
  const SortArr = [
    "Featured",
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, new to old",
    "Date, old to new",
  ];

  const NavProductFilter = (
    <nav className="product-filter">
      <h1>Example Shop</h1>
      <div className="sort">
        <SortAndFilter
          onFilterChange={onFilterChange}
          label={"Filter By"}
          categories={categories}
        />
        <SortAndFilter label={"Sort By"} categories={SortArr} />
      </div>
    </nav>
  );

  return <div>{NavProductFilter}</div>;
};

export default Nav;
